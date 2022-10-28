import { useState } from "react"
import { useCart} from "../../Context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'
import React from 'react'
import './Checkout.css'







const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { Cart, total, clearCart } = useCart();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    

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
    
            const productsRef = collection(db, 'products')
    
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

               
                console.log('success', `El id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('error','no hay stock disponibles')
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






    return (
        <div className="formulario">
            <h1>Formulario</h1>
            <h2>complete el siguiente formulario para realizar su orden</h2>
        
            <input  value={name} onChange={(e) => setName(e.target.value)} type="text"     placeholder="Nombre" />
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"    placeholder="Dirección" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"     placeholder="Email" />
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number"    placeholder="Teléfono" />
           <button onClick={order}>generar pedido</button>
        </div>
    )
}

export default Checkout