import { useState,useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"



const ItemDetailContainer =()=>{


const [product,setProduct]= useState([])
const [loading,setLoading]= useState(true)


const {productId}= useParams()
console.log(productId)



//simulacion de API
useEffect(()=>{

getProductById(productId).then(response=>{

    console.log (response)
    setProduct(response)

}).finally(()=>{
    setLoading(false)
})
},[productId])
    
if(loading){

    return<h1>loading...</h1>
}

console.log(product)

return (
    <div>
    <h1>Producto</h1>
    <ItemDetail product={product.id}{...product}/>
    </div>
)


}
export default ItemDetailContainer