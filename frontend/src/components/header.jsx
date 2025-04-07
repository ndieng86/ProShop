import { Navbar, Nav, Container } from "react-bootstrap"
import { fashoppinCart, FaUser } from 'react-icons/fa'
 const Header = () => {
  return (
    <header>
      <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cart"><fashoppinCart />Cart</Nav.Link>
              <Nav.Link href="/login"><FaUser />Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  )
}

export default Header
