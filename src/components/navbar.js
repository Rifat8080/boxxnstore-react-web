import React from "react";
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'; 
import logo from './assets/logo.png'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import from the appropriate package, in this case, free-brands-svg-icons
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const NavHead =()=>{
    return(
            <Navbar expand="lg" className="nav-bg p-3">
              <Container >
                <Navbar.Brand href="#">  <Image src={logo} alt="Logo" fluid className="logo-size" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    navbarScroll
                  >
                    <Nav.Link href="#action1" className="navlink">Home</Nav.Link>
                    <Nav.Link href="#action2" className="navlink">About us</Nav.Link>
                    <Nav.Link href="#action7" className="navlink">Pricing</Nav.Link>
                    <NavDropdown title="Services" id="navbarScrollingDropdown" className="navlink">
                      <NavDropdown.Item href="#action3" >Storage units</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4" >
                       Packing Materials
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5" >
                        Movers & Packers
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action9">Contact us</Nav.Link>
                  </Nav>
                  <Form className="d-flex align-items-center searchbox">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        style={{ color: '#000000', backgroundColor: '#FAC300' }}
      />
      <button type="button" className="btn search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
      </button>
    </Form>
                  <Button className="btn-primary getq">GET A QUOTE</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        
    )
}

export default NavHead;