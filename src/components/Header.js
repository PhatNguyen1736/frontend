import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "bootstrap-icons/font/bootstrap-icons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  return (
    <header>
      <Navbar bg= "dark" variant= 'dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand >ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to='/cart'>
              <Nav.Link> 
              <i class="bi bi-cart"></i> 
                Cart </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link href="#link"> 
              <i class="bi bi-person"></i>
               Sign In </Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header