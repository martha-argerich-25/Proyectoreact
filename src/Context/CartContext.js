import {useState, createContext,useEffect, useContext} from "react"
import react from 'react'



export const CartContext = createContext(
    {
        cart :[],
        totalQuantity: 0
    }
)


// como es un componente de alto orden recibe childre (hijos)
 export const CartProvider = ({children})=>{

    const [Cart,setGoCart] = useState([])
    const [totalQuantity,setTotalQuantity]= useState(0)

    useEffect (()=>{

        const finallyTotal = getQuantity()
        setTotalQuantity(finallyTotal)

    },[Cart])

    //----------------------------funciones-------- agregar producto--------------------
    const addItem = (productToAdd)=>{
    //si no esta el producto con ese id seteo con el producto que quiero agregar
    if (!isInCart (productToAdd.id)){
      setGoCart([...Cart,productToAdd])
    }
    
    
    }
    //-------------precio total----------------------
    const totalPrice = ()=>{
        return Cart.reduce ((prev,act)=> prev +act.quantity * act.price,0);

    }
    //------------------------ por cada elemento ejecuta la funcion y el resultado la acumula en prev
const totalProducts = ()=> Cart.reduce((acumulador,productoActual)=>acumulador+productoActual.quantity,0)




    const isInCart= (id)=>{
    // hay algun producto que cumpla esta condicion? 
      return Cart.some(prod=>prod.id=== id)
    }
    
   
    
///------------- para eliminar un producto del carrito//
    const removeItem =(id)=>{

        const cartRemoveProduct = Cart.filter(prod => prod.id !== id)
        setGoCart(cartRemoveProduct)
    } 
//--------------------------------------------

    const getQuantity =()=>{
        let accu = 0

        //cuenta y suma
        Cart.forEach(prod=>{
            accu += prod.count
        })
        return accu
    }

//---------------------------------------------------


return(
    <CartContext.Provider value={{Cart,addItem,removeItem,totalQuantity,totalPrice,totalProducts}}>
            {children}
     </CartContext.Provider>

)
}

export const useCart =()=>{
    return useContext (CartContext)
}