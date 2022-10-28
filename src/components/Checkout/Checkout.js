import { useState } from "react"
import { useCart} from "../../Context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'
import React from 'react'







const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { Cart, total, clearCart } = useCart;


    

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
        <div>
            <h1>Formulario</h1>
            
            <button onClick={order}>Generar Pedido</button>
        </div>
    )
}

export default Checkout