import './Navbar.css';
import logo from '../../assets/img/logo.png';



const Navbar = ()=> {

    return (
      <header> 
           <img src={logo} width="200" alt="flor"/>
      <nav>       
       <ul>
         <li>
           <a href=''>inicio</a>
         </li>
         <li>
           <a href=''>objetos</a>
         </li>
         <li>
           <a href=''>contactos</a>
         </li>
         <li>
           <a href=''>compra</a>
         </li>
       </ul>
         </nav>
       </header>  
    )
}
export default Navbar