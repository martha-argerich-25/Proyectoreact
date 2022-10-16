import cartwidget from '../../assets/img/cartwidget.png';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartWidget = ()=>{

const {totalQuantity} = useContext(CartContext)


// ese totalquantity lo uso en el return
    return (
        <div>
            <img  src={cartwidget} alt="carrito" width="50"/>
          <div>{totalQuantity}</div>
        </div>
    )
}
export default CartWidget