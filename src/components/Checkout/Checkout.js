import { useState } from "react"
import { useCart } from "../../CartContext/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { dataBase } from '../../Service/Firebase'
import React from 'react'






const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useCart;


    

    const order = async () => {
        setLoading(true)

        try {
            const objOrder = {
                persona: {
                    name: 'rodrigo',
                    phone: '234234',
                    mail: 'rodriperetti@gotmail.com',
                    address:'avenida siempre viva 324'
                },
                items: cart,
                total: total
            }
            
            const batch = writeBatch(dataBase)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(dataBase, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(dataBase, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

               

                console.log('success', `El id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('error','hay productos que estan fuera de stock')
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
        <div>
            <h1>Formulario</h1>
            <label>nombre</label>
            <imput type="text"></imput>
            <label>apellido</label>
            <imput type="text"></imput>
            <label>email</label>
            <input type="email"></input>
            <label>direccion</label>
            <imput type="text"></imput>
            <button onClick={order}>Generar Pedido</button>
        </div>
    )
}

export default Checkout