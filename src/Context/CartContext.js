import  {useState, useEffect, useContext,createContext} from 'react'

// las funciones del cart//
export const CartContext = createContext({
    Cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children} ) => {
	const [Cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)



    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [Cart])

	useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [Cart])

	const addProduct = (productToAdd, quantity) => {
        if(!isInCart(productToAdd.id)) {
            productToAdd.quantity = quantity
            setCart([...Cart, productToAdd])
        } else {
            const cartUpdated = Cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: quantity
                    }

                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }


const clearCart = () => setCart ( [ ] )


const isInCart = (id) => { return Cart.find (product =>product.id ===id) ? true : false }


// funcion para remover el producto//
const removeProduct = (id) => setCart (Cart.filter ( product => product.id !== id))


// funcion para el precio total//
const getTotal = () => {
	let total = 0
	Cart.forEach(prod => {
		total += prod.quantity * prod.price
	})
	
	return total 
}
// funcion para la cantidad
const getQuantity = () => {
	let accu = 0

	Cart.forEach(prod => {
		accu += prod.quantity
	})

	return accu
}


return (
<CartContext.Provider value= {{
	clearCart, 
	isInCart, 
	removeProduct, 
	addProduct, 
	getQuantity,
	totalQuantity,
	total,
	Cart 
	}}>
		{children}
</CartContext.Provider> 
)
}

export const useCart = () => {
    return useContext(CartContext)
}