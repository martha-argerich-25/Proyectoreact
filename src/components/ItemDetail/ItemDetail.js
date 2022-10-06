
import Counter from './components/counter/counter';


// CARD//
const ItemDetail = ({product})=>{

return(
  
    <div className='box'>
           
    
    <h2 className='title'>{product.name}</h2>

     <h2>Precio {product.price}$</h2>
     <h2>Stock {product.stock}</h2>
     <p>{product.description}description</p>
    <img src={product.img} alt={'name'} style={{width:400}}/>
    <Counter/>    
  

</div>)


}

export default ItemDetail