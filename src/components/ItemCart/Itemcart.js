
import React from 'react'
import {useCart} from '../../Context/CartContext'
import './ItemCart.css'



const ItemCart = ({product}) => {
  const {removeProduct} = useCart ();

return (    
  <div>
      <h1>{product.name}</h1>
      <p>Precio  ${product.price}</p>
      <p>cantidad de producto elegido = {product.quantity}</p>
     
      <p>Subtotal: ${product.quantity * product.price}</p>
      <button  className='ButtonColor1' onClick={()=>removeProduct(product.id)}> Eliminar</button>

  </div>
)
}

export default ItemCart