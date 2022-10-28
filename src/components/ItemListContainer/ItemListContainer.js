
import { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import {getDocs,collection } from "firebase/firestore"
import { db } from "../../service/firebase"


// traer el servicio de firestore
// crear un puntero al dato que queremos traer
// traer el dato con una promesa

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading] = useState(false)
    const { category } = useParams()
    

    useEffect(() => {
        //setLoading(true)

        //const querydb = getFirestore()
        const queryCollection = collection(db,'prueba' );
        getDocs (queryCollection)
        .then(res =>setProducts  (res.docs.map(product=>({id:product.id,...product.data()}))))
   
    }, [])
   
   
    if (loading) {
        return (
            <div>

<h1>esperando</h1>

            </div>)
    }

    return (
        <div >
         
            <div>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer