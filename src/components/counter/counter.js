import { useState } from "react"

const  Counter = ({stock=4, initial = 1 ,onAdd})=>{


    // se desestructura ,lo que esta en la posicion 0 la guarda con nombre count y posicion 1 (la funcion con el nombre setcount)
    const [count,setCount] = useState(initial)

    const sumar=()=>{

        // condicion por maximo de productos
        if (count < stock){
           setCount (count + 1)
        }
    }


    const restar=()=>{

        
         if ( count > 1){
             setCount (count -1)
             
         }
        // condicion para que no de numeros negativos
        
    }

    return (
        <div>
    <h1>contador</h1>
    <h2>{count}</h2>
    <button onClick={restar}>restar</button>
  <button onClick={sumar}>sumar</button>
  <button onClick={()=>onAdd(count)}>agregar al carrito</button>
        </div>
        
        

    )

}

export default Counter