import React  from 'react'
import {useCart} from '../../Context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from '../ItemCart/Itemcart'





const Cart =()=> {


const {Cart,totalPrice} = useCart();


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
           
    {
       
        Cart.map(products =><ItemCart Key={products.id} product={products}/>)
   
    }
         <p>total:{totalPrice}</p>

</div>

)




}
export default Cart