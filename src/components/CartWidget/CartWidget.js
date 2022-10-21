
import cartwidget from '../../assets/img/cartwidget.png';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';






const CartWidget = ()=>{

const {totalQuantity,Cart,totalPrice} = useContext (CartContext)

return(

    <div>
        <img src ={cartwidget} alt = "carrito" width="50"/>
        {totalQuantity}
    </div>
)




}







    
export default CartWidget