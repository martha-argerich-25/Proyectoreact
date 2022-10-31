import { useState } from "react"
import './counter.css'

//CONTADOR//

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
    <button  className="ButtonColor" onClick={restar}>restar</button>
    <span id='span1'></span>
    <span id='span2'></span>
    <span id='span3'></span>
    <span id='span4'></span>
  <button className="ButtonColor" onClick={sumar}>sumar</button>
  <button className="ButtonColor"  onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
        
        

    )

}

export default Counter