import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import React, { useState } from "react";
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ModalOne, ModalTwo, ModalThree, ModalFour, ModalFive}  from '../components/modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import from the appropriate package, in this case, free-brands-svg-icons
import { faWarehouse} from '@fortawesome/free-solid-svg-icons';
import { FaCartFlatbedSuitcase, FaBoxesPacking } from "react-icons/fa6";
import { MdWarehouse } from "react-icons/md";

import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

const HeaderCarousel = () => {

  const [modalShowOne, setModalShowOne] = useState(false);
  const [modalShowTwo, setModalShowTwo] = useState(false);
  const [modalShowThree, setModalShowThree] = useState(false);
  const [modalShowFour, setModalShowFour] = useState(false);
  const [modalShowFive, setModalShowFive] = useState(false);
  return (
    <>
      <Carousel data-bs-theme="light">
        <Carousel.Item className='c-height d-flex ' >
          <Image
            className="d-block  w-100"  // Combine classes in a single string
            src={image1}
            alt="Storage image"
            fluid
          />

          <div className="overlay">
          <Carousel.Caption className='header-car-heading' style={{ fontWeight:'900', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <h2 style={{ fontSize: '2.9em', marginBottom:'40px', width:'100%' }} className='first-car-header'>Welcome to The Ultimate Smart Storage Solution</h2>
            <button className="btn btn-primary book-btn">Book Now</button>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item className='c-height'>
          <Image
            className="d-block w-100"  // Combine classes in a single string
            src={image2}
            alt="Slide 2"
            fluid
          />

          <div className="overlay">
          <Carousel.Caption className='second-car-text' style={{ fontWeight:'900', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <h2 style={{ fontSize: '3.5em' }} className='second-car-header'>Storage Solution</h2>
            <p className='car-description'>A highly efficient and affordable storage solution catering
              for all your possible storage needs.Simple, Fast and Affordable storage 
              services.</p>

              <Row className='cards-info d-flex justify-content-center align-items-center ' style={{ marginTop:'55px' }}>

              <Col xs={2} md={6} lg={6} xl={3}>
                  <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}} className='d-flex justify-content-center align-items-center'>
                 
                    <Card.Body >
                    <FontAwesomeIcon
                                icon={faWarehouse}
                                className="mb-3"
                                style={{ color: 'white', fontSize:'3.5em' }}
                              />
                      <Card.Title style={{color:'white'}} className='text-nowrap'>RESIDENTIAL STORAGE</Card.Title>
                      <Button className="btn btn-primary book-btn" onClick={() => setModalShowOne(true)}>
                        More Info
                      </Button>

                      <ModalOne
                        show={modalShowOne}
                        onHide={() => setModalShowOne(false)}
                      />
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={2} md={6} lg={6} xl={3}>
                  <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}} className='d-flex justify-content-center align-items-center'>

                    <Card.Body>
                    <MdWarehouse style={{ color: 'white', fontSize:'4.5em' }}/>
                      <Card.Title style={{color:'white'}} className='text-nowrap'>STORAGE BY THE BOX</Card.Title>
                      <Button className="btn btn-primary book-btn" onClick={() => setModalShowTwo(true)}>
                        More Info
                      </Button>

                      <ModalTwo
                        show={modalShowTwo}
                        onHide={() => setModalShowTwo(false)}
                      />
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={2} md={6} lg={6} xl={3}>
                  <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}} className='d-flex justify-content-center align-items-center'>
                  
                    <Card.Body>
                      
                      <FaCartFlatbedSuitcase style={{ color: 'white', fontSize:'4.5em' }} />
                      <Card.Title style={{color:'white'}} className='text-nowrap'>SUITCASE STORAGE
                      </Card.Title>
                      <Button className="btn btn-primary book-btn" onClick={() => setModalShowThree(true)}>
                        More Info
                      </Button>

                      <ModalThree
                        show={modalShowThree}
                        onHide={() => setModalShowThree(false)}
                      />
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={2} md={6} lg={6} xl={3}>
                  <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}} className='d-flex justify-content-center align-items-center'>
                  
                    <Card.Body>
                    <FaBoxesPacking  className=""
                                style={{ color: 'white' ,fontSize:'4.5em'}} />
                      <Card.Title style={{color:'white'}} className='text-nowrap'>OFFICE STORAGE</Card.Title>
                      <Button className="btn btn-primary book-btn" onClick={() => setModalShowFour(true)}>
                        More Info
                      </Button>

                      <ModalFour
                        show={modalShowFour}
                        onHide={() => setModalShowFour(false)}
                      />
                    </Card.Body>
                  </Card>
                </Col>


              
              </Row>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item className='c-height'>
          <Image
            className="d-block w-100"  // Combine classes in a single string
            src={image3}
            alt="Slide 3"
            fluid
          />
           <div className="overlay">
          <Carousel.Caption style={{ fontWeight:'900', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <h2 style={{ fontSize: '3.5em', marginBottom:'75px' }} className='third-car-header'>Movers & Packers</h2>
            <p className='car-description'>Boxxnstore is a Dubai’s professional movers company. We provide moving services in Dubai, Sharjah & Ajman.
                    Possessing countless satisfied residential and commercial clientele, Boxxnstore is Dubai’s elite 
                    movers and packers. With our onboard insurance,
                    high-quality packing materials and professional staff look no further.</p>
                      <Button className="btn btn-primary book-btn" onClick={() => setModalShowFive(true)}>
                      More Info
                      </Button>

                      <ModalFive
                        show={modalShowFive}
                        onHide={() => setModalShowFive(false)}
                      />
          </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeaderCarousel;
