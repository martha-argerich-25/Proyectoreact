import {useState, createContext,useEffect } from "react"




export const CartContext = createContext()


// como es un componente de alto orden recibe childre (hijos)
 export const CartProvider = ({children})=>{

    const [Cart,setGoCart] = useState([])
    const [totalQuantity,setTotalQuantity]= useState(10)

    useEffect (()=>{

        const finallyTotal = getQuantity()
        setTotalQuantity(finallyTotal)

    },[Cart])

    const addItem = (productToAdd)=>{
    //si no esta el producto con ese id seteo con el producto que quiero agregar
    if (!isInCart (productToAdd.id)){
      setGoCart([...Cart,productToAdd])
    }
    
    
    }
    
    const isInCart= (id)=>{
    // hay algun producto que cumpla esta condicion? 
      return Cart.some(prod=>prod.id=== id)
    }
    
    
// para eliminar un producto//
    const removeItem =(id)=>{

        const cartRemoveProduct = Cart.filter(prod => prod.id !== id)
        setGoCart(cartRemoveProduct)
    } 


    const getQuantity =()=>{
        let accu = 0

        //cuenta y suma
        Cart.forEach(prod=>{
            accu += prod.count
        })
        return accu
    }




return(
    <CartContext.Provider value={{Cart,addItem,removeItem,totalQuantity}}>
            {children}
     </CartContext.Provider>

)
}