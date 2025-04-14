import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from "../assets/logo.png"
 const Header = () => {
  return (
    <header>
      <Navbar bg="dark"  variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Nav.Link as={Link} to="/">
            <Navbar.Brand href="/">
              <img src={logo} alt="ProShop" />
              ProShop
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <FaUser /> Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  )
}

export default Header
