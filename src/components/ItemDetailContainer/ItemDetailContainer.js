import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"
import { getFirestore,getDoc ,doc} from "firebase/firestore"


//ITEM DETAIL CONTAINER

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()


  useEffect(() => {
      const querydb = getFirestore()
      const queryDoc = doc(querydb, 'prueba', productId);
      getDoc(queryDoc)
          .then(res => setProducts({ id: res.id, ...res.data() }))
          .finally(() => {
              setLoading(false)
          })



  }, [productId])


  if (loading) {
    

    <h1>loading</h1>

  }
  return (
      <div>
          <ItemDetail  {...products} />

      </div>
  )
}

export default ItemDetailContainer