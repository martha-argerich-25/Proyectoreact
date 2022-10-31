import { useState } from "react"
import { useCart} from "../../Context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'
import React from 'react'
import './Checkout.css'
import swal from 'sweetalert'





// FUNCION DE COMPRA Y CONFIRMACION ENVIANDO DATOS A FIREBASE//

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { Cart, total, clearCart } = useCart();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


// FUNCION PARA LA ORDEN Y ACTUALIZACION DE STOCK //
    const order = async () => {
        setLoading(true)

        try {
            const objOrder = {
                persona: {
                    name: {name},
                    phone: {phone},
                    mail: {email},
                    address:{address}
                },
                items: Cart,
                total: total
            }
            
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = Cart.map(prod => prod.id)
            const productsRef = collection(db, 'prueba')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = Cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                clearCart()
                console.log('success', `El id es : ${orderAdded.id}`)

                // UN ALERT PARA INFORMAR LA COMPRA CORRECTAMENTE
                swal ('su compra se  realizo correctamente')
            } else {
              // UN ALERT PARA INFORMAR QUE NO HAY STOCK
                swal ('NO HAY STOCK DISPONIBLE')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta procesando su pedido...</h1>


    
    }
    
//VALIDACION DE FORMULARIO

const submit =(e)=>{

    e.prevetDefault()
    
       if(name.value === null || name.value ===''){
        
           swal ('complete los campos')
           
       }
       if(email.value === null || email.value=== '' ){
           swal ('complete los campos')
       }
       if(phone.value=== null || phone.value=== ''){
           swal ('complete los campos')
       }
       if(address.value=== null || address.value=== ''){
           swal ('complete los campos')
       }
   
   
   return false;
  
   }
   

// FORMULARIO  CON LOS DATOS QUE SE ENVIAN AL FIREBASE//

    return (
        <div className="formulario">
            <h1>Formulario</h1>
            <h2>complete el siguiente formulario para realizar su orden</h2>
            <input  value={name} onChange={(e) => setName(e.target.value)} type="text"     placeholder="Nombre" />
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"    placeholder="Dirección" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"     placeholder="Email" />
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number"    placeholder="Teléfono" />
           <button  className="ButtonColor2" onClick={order}>Generar pedido</button>
           <button className="ButtonColor2" onClick={(e) => this.submit(e)}>validar datos</button>
          
        </div>
    )
}

export default Checkout