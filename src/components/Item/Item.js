
// esto va a ir dentro de itemlist


const Item =(img ,name, price,stock)=>{

return (
        <div>
             <h2>{name}</h2>
             <h2>{price}</h2>
             <h2>{stock}</h2>
             <img src={img} alt={'name'} style={{width:250}}/>
        </div>)
  
  






}
export default Item