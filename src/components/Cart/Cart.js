import React  from 'react'
import {useCart} from '../../Context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from '../ItemCart/Itemcart'

import './Cart.css'





const Cart =()=> {


const {Cart,total} = useCart();


if ( Cart.length === 0){

    return(
    <div>
    <p>no hay producto en el carrito</p>
    <Link to ='/'>Hacer compra</Link>
   </div>

    )
}
    

return (

<div>
           
    { Cart.map(products =><ItemCart Key={products.id} product={products}/>) }
         <p>Total a Pagar: ${total}</p>
         <Link to='/Checkout'>Checkout</Link>
</div>

)


}
export default Cart