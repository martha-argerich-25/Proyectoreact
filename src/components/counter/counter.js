import { useState } from "react"

const  Counter = ({onAdd})=>{


    // se desestructura ,lo que esta en la posicion 0 la guarda con nombre count y posicion 1 (la funcion con el nombre setcount)
    const [count,setCount] = useState(0)

    const sumar=()=>{

        setCount (count + 1)

        // condicion por maximo de productos
        if (count >9){
           setCount (count - 10)
        }
    }


    const restar=()=>{

        setCount (count - 1)
         if ( count < 1){
             setCount (count +10 -10)
             
         }
        // condicion para que no de numeros negativos
        
    }

    return (
        <div>
    <h1>contador</h1>
    <h2>{count}</h2>
    <button onClick={restar}>restar</button>
  <button onClick={sumar}>sumar</button>
  <button onClick={onAdd}>agregar al carrito</button>
        </div>
        
        

    )

}

export default Counter