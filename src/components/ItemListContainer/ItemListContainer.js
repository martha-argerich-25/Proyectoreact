
import { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { getFirestore,getDocs,collection } from "firebase/firestore"


// traer el servicio de firestore
// crear un puntero al dato que queremos traer
// traer el dato con una promesa

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    

    useEffect(() => {
        setLoading(true)

        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'products' );
        getDocs (queryCollection)
        .then(res =>setProducts  (res.docs.map(product=>({id:product.id,...product.data}))))
       
       
       

      
    }, [category])

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