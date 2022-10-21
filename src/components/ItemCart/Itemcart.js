
import React from 'react'
import {useCart} from '../../Context/CartContext'






const ItemCart = ({product})=> {

  const {removeItem}  =   useCart();


return (

<div>
<p>nombre:{product.name}</p>
 <p>Precio {product.price}$</p>
<img src ={product.img}alt ={product.title}></img>
<p>cantidad :{product.quantity}</p>
    <p>subtotal:${product.quantity* product.price}</p>

   
  <button onClick={()=>removeItem(product.id)}>eliminar</button>



</div>


)
}
export default ItemCart

