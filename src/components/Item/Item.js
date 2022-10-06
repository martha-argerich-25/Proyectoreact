import './Item.css';

// esto va a ir dentro de itemlist


const Item =({img ,name, price,stock})=>{

return (
        <div className='box'>
             <h2 className='title'>{name}</h2>
            <h2>Precio {price}$</h2>
            <h2>Stock {stock}</h2>
             <img src={img} alt={'name'} style={{width:400}}/>
       </div>)
  
  






}
export default Item