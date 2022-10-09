
import Counter from "../counter/counter"


// CARD//
const ItemDetail = ({name,price,stock,description,img,category})=>{
   
    const handLeOnadd =()=>{
        console.log("se agrego al carrito")
      }

  
return(
  
    <div className='box'>
           
   
    <h2 className='title'>{name}</h2>

     <h2>Precio {price}$</h2>
     <h2>Stock {stock}</h2>
     <p>{description}</p>
    <p>categoria {category}</p>
    <img src={img} alt={'name'} style={{width:400}}/>


    <Counter onAdd={handLeOnadd}/>
  

</div>)


}

export default ItemDetail