
import cartwidget from '../../assets/img/cartwidget.png';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';




// CARRITO DE COMPRAS//

const CartWidget = ()=>{
const {totalQuantity} = useContext (CartContext)

return(

    <div>
        <img src ={cartwidget} alt = "carrito" width="50"/>
        <p>{totalQuantity}</p>
    </div>
)

}


    
export default CartWidget