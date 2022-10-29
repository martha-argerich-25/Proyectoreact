import './Item.css';
import {Link} from 'react-router-dom'

// esto va a ir dentro de itemlist


const Item =({id,img ,name, price,stock,category})=>{

return (
        <div className='box'>
             <h2 className='title'>{name}</h2>

   <button className='buttonItem'><Link to={`/detail/${id}`}>Ver detalle</Link></button>
            <h2>Precio {price}$</h2>
            <h2>Stock {stock}</h2>
            <h2>category {category}</h2>
             <img src={img} alt={'name'} style={{width:400}}/>
          
             
       </div>
       
       )
  
  






}
export default Item