import './Navbar.css';
import logo from '../../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';



function BasicExample() {
  return (
    
    <Navbar bg="light" expand="lg">
      <img src={logo} width="100" alt="flor"/>
      <Container>
        <Navbar.Brand href="#home">Orquideas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Ventas</Nav.Link>
            <NavDropdown title="mas opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">compras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               otros productos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">contactos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                saludos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;