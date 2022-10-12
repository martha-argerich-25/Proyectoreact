
import Counter from "../counter/counter";
import{useState} from 'react';
import { Link } from "react-router-dom";


// CARD// componente de visualizacion
const ItemDetail = ({name,price,stock,description,img,category})=>{
   
const [goCart,setGoCart] = useState (false);


    const handLeOnadd =()=>{
       setGoCart(true);


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
      goCart ?<Link to='/cart'>finalizar compra</Link>:<Counter onAdd={handLeOnadd}/>

  }

</div>)


}

export default ItemDetail