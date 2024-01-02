import React, {useRef} from "react";
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { InputGroup, FormControl } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'; 
import logo from './assets/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import from the appropriate package, in this case, free-brands-svg-icons
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const NavHead =()=>{

  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const inputValue = searchInputRef.current.value;
    
  };
    return(
      <>
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
                  <InputGroup className="me-3" style={{ maxWidth: '300px', backgroundColor:'#FAC300',border:'none', borderRadius:'4px',color:'white' }}>
                    <FormControl
                      id="search-input"
                      type="search"
                      placeholder="Search"
                      ref={searchInputRef}
                      style={{ backgroundColor: '#FAC300', border:'none',  color: 'white'}}
                    />
                    <Button id="search-button" variant="primary" onClick={handleSearch}style={{ backgroundColor: '#3ABECA',border:'none' }}>
                    <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className=""
                                style={{ color: 'white' }}
                              />
                    </Button>
                  </InputGroup>
                  <Button className="btn-primary getq mt-sm-2">GET A QUOTE</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
</>
    )
}

export default NavHead;