
import Counter from "../counter/counter";
import{useContext,useState } from 'react';
import { Link } from "react-router-dom";
import{useCart}from '../../Context/CartContext'






// CARD// componente de visualizacion
const ItemDetail = ({id,name,price,stock,description,img,category})=>{
   

  

  const [goToCart,setGoCart]= useState(false)
  const {addItem} = useCart();



    const handLeOnadd =(count)=>{

      setGoCart(true)

      const productToAdd ={
        id,name,price,count
      }


     addItem (productToAdd)


      }

  
return(
  
    <div className='body'>
    <h2 className='title'>{name}</h2>

     <h2>Precio {price}$</h2>
     <h2>Stock {stock}</h2>
     <p>{description}</p>
    <p>categoria {category}</p>
    <img src={img} alt={'name'} style={{width:400}}/>
    

  {
      //si es verdadero que nos lleve al carrito y si es falso que renderice
      goToCart ?<Link to='/cart'>finalizar compra</Link>:<Counter onAdd={handLeOnadd}/>

  }

</div>)


}

export default ItemDetail