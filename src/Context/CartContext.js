import {useState, createContext,useEffect, useContext} from "react"




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
    const [total,setTotal]=useState (0)

    useEffect (()=>{

     const finallyTotal = getQuantity()
        setTotalQuantity(finallyTotal)

    },[Cart])


    useEffect (()=>{

const total = getTotal()
setTotal (total)


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
        return Cart.reduce ((prev,act )=> prev +act.quantity * act.price,0);

    }
    //------------------------funcion para saber la cantidad de productos hay en el carrito----------
const totalProducts = ()=> Cart.reduce((acumulador,productoActual)=>acumulador + productoActual.quantity,0)




    const isInCart= (id)=>{
    // hay algun producto que cumpla esta condicion? 
      return Cart.some(prod=>prod.id=== id)
    }
    
   
   
    
///------------- para eliminar un producto del carrito//
    const removeItem =(id)=>{

        const cartRemoveProduct = Cart.filter(prod => prod.id !== id)
        setGoCart(cartRemoveProduct)
    } 
//-----------------obtengo la catidad total---------------------------

    const getQuantity =()=>{
        let accu = 0

        //cuenta y suma
        Cart.forEach(prod=>{
            accu += prod.count
        })
        return accu
    }

//----------------------------------obtengo el total-----------------

const getTotal = ()=>{
    let accu = 0
    
    Cart.forEach (prod =>{
        accu+= prod.quantity * prod.price

    })
}


return(
    <CartContext.Provider value={{Cart,addItem,isInCart,removeItem,totalQuantity,totalPrice,totalProducts,getQuantity,getTotal}}>
            {children}
     </CartContext.Provider>

)
}

export const useCart =()=>{
    return useContext (CartContext)
}