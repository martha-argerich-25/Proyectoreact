
//es el encargado de traer los productosy listarlos //


import { useState,useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({hola})=>{

   const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(true)

useEffect(()=>{
getProducts().then(response=>{
    console.log(response)
setProducts(response)
}).finally(()=>{
setLoading(false)

})
},[])

//----------------------------------
if(loading){
   return <h1>loading....</h1>
}

console.log(products)

//const productsMapped = products.map(prod=> 
//<li>
   //  <h2>{prod.name}</h2>
   //  <h2>{prod.price}</h2>
  //   <h2>{prod.stock}</h2>
  //   <img src={'/img/1.jpg'} alt={'orquidea'}/>
     
//</li>)
//console.log(productsMapped)

    return ( 
      <div>
          <h1>Lista de productos</h1>
          <ItemList products={products}/>
         


         </div>

    )

   
}

export default ItemListContainer