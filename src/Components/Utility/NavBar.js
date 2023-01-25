import React from 'react'
import { Nav,Button, Container, Form, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

import Logo from '../../assets/Images/a2zLogo.png'
import cart from '../../assets/Images/shopping-cart.png'
import Login from '../../assets/Images/login.png'


const NavBar = () => {
  return (
    [ 'sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3" style={{borderBottom:'1px solid #F25379',
       backgroundColor:'#F4F6F9', zIndex:'2',position:'fixed',width:'100%',top:'0px'}}>
        <Container fluid>
          <Navbar.Brand href="/"><img src={Logo}  style={{width:"80px"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-flex justify-content-betaween w-100">
              <Form className="d-flex   " style={{width:'100%'}}>
              <Form.Control
                type="search"
                placeholder="بحث"
                className="mx-2"
                aria-label="Search"
              />
              <Button style={{backgroundColor:'#87ABDD',color:"whitesomke",padding:'5px',fontSize:'14px'}}>إبحث</Button>
            </Form>
              
               <div className='d-flex justify-content-end  ' style={{width:'40%'}}>
               <Nav.Link   href="/login"><img src={Login} style={{width:'25px'}}/></Nav.Link>
               <Nav.Link  href="/cart"><img src={cart} style={{width:'25px',marginRight:'20px'}}/></Nav.Link>
        
               </div>
                
              </Nav>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))
  )
}

export default NavBar
