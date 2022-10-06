import { useState,useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer =()=>{


const [product,setProduct]= useState([])
const [loading,setLoading]= useState(true)

useEffect(()=>{

getProductById('1').then(response=>{

    console.log (response)
    setProduct(response)

}).finally(()=>{
    setLoading(false)
})
},[])
    
if(loading){

    return<h1>loading...</h1>
}
console.log(product)

return (
    <div>
    <h1>Producto</h1>
    <ItemDetail key={product.id}/>
    </div>
)


}
export default ItemDetailContainer