
//es el encargado de traer los productosy listarlos //


import { useState,useEffect } from "react"
import { getProducts,getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import './ItemListContainer.css'



const ItemListContainer = ({hola})=>{

   const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(true)
    const {categoryId}= useParams
    console.log (categoryId)

useEffect(()=>{
    // si tengo categoryid  busca la categoria y si no es get products

    const asynFunction = categoryId ? getProductsByCategory : getProducts



    asynFunction(categoryId).then(response=>{
    console.log(response)
setProducts(response)
}).finally(()=>{
setLoading(false)

})
},[categoryId])

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
          <Link to = {'/category/faciles'} className="Titlefilter"> Faciles cuidados</Link>

          <Link to = {'/category/dificiles'}>Dificiles cuidados</Link>

          <ItemList products={products}/>
        
         


         </div>

    )

   
}

export default ItemListContainer