import './Navbar.css';
import logo from '../../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'




// NAVBAR// 

function BasicExample() {



  return (

  
    <Navbar  bg="light" expand="lg">
      <img src={logo} width="100" alt="flor"/>
      <button className='ButtoncolorNav'> <Link to = {'/category/faciles'} > Faciles cuidados</Link></button>
      <button className='ButtoncolorNav'>  <Link to = {'/category/dificiles'}>Dificiles cuidados</Link></button>
      <Container >
 <button className='ButtoncolorNav1'> <Link to ='/'>HOME</Link></button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="color">
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;