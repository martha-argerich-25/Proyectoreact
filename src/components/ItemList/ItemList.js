//lista los productos
import Item from "../Item/Item"






const ItemList =({products})=>{


return(

  // uso map para trasformar el array de objetos  en componenetes
    <div>
        {products.map(prod=><Item key ={prod.id} img ={prod.img} name={prod.name}price={prod.price}stock={prod.stock}/>)}
    </div>
    
    )

}

export default ItemList








          

