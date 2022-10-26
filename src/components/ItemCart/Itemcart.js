
import React from 'react'
import {useCart} from '../../Context/CartContext'



const ItemCart = ({product})=> {

  const {removeItem,totalPrice}  =  useCart();


return (

<div>
<p>nombre:{product.name}</p>
 <p>Precio {totalPrice}$</p>
 <img src={product.img} alt={'name'} style={{width:400}}/>

<p>cantidad :{product.quantity}</p>
    <p>subtotal:${product.quantity * product.price}</p>

   
  <button onClick={()=>removeItem(product.id)}>eliminar</button>



</div>


)
}
export default ItemCart

