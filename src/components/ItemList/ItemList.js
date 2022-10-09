//lista los productos
import Item from "../Item/Item"






const ItemList =({products})=>{


return(

  // uso map para trasformar el array de objetos  en componenetes
    <div>
        {products.map(prod=><Item key ={prod.id}  id ={prod.id}img ={prod.img} name={prod.name} category={prod.category} price={prod.price}stock={prod.stock}/>)}
    </div>
    
    )

}

export default ItemList








          

