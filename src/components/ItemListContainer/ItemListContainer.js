import './ItemListContainer.css'
import { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {getDocs,collection,where,query } from "firebase/firestore"
import { db } from "../../service/firebase"


// traer el servicio de firestore
// crear un puntero al dato que queremos traer
// traer el dato con una promesa

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const { categoryId } = useParams()
   

    

    useEffect(() => {
        setLoading(true)
//FUNCION PARA EL FILTRADO DE CATEGORIAS LLAMADO DE FIREBASE

       const collectionRef = categoryId 
       ? query(collection(db, 'prueba'), where('category', '==', categoryId))
       : collection(db, 'prueba')
   getDocs(collectionRef).then(response => {
       const productsAdapted = response.docs.map(doc => {
           const data = doc.data()
           return { id: doc.id, ...data }
       })
       setProducts(productsAdapted)

   }).catch(error => {
       console.log(error)
   }).finally(() => {
       setLoading(false)
   })  
   
    }, [categoryId])
   

    if (loading) {
        return (
            <div>

<h1>esperando</h1>

            </div>)
    }

    return (
        <div >
         
            <div>
                <h1>Lista de orquideas</h1>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer