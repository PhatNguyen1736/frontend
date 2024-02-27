import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
const Header = () => {
  return (
    <header>
      <Navbar bg= "dark" variant= 'dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
              Cart</Nav.Link>
              <i className='fas fa-shopping-cart'></i>
              <Nav.Link href="#link"> <i className='fas fa-user'> </i>
              Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header