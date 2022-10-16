
import Counter from "../counter/counter";
import{useContext, } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";




// CARD// componente de visualizacion
const ItemDetail = ({id,name,price,stock,description,img,category})=>{
   
const {addItem} = useContext (CartContext);



    const handLeOnadd =(count)=>{

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
    <Counter onAdd={handLeOnadd}/>
  {
      //si es verdadero que nos lleve al carrito y si es falso que renderice
      //goCart ?<Link to='/cart'>finalizar compra</Link>:<Counter onAdd={handLeOnadd}/>

  }

</div>)


}

export default ItemDetail