import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import React from "react";
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

const HeaderCarousel = () => {
  return (
    <>
      <Carousel data-bs-theme="light">
      
        <Carousel.Item className='c-height d-flex ' >
          <Image
            className="d-block  w-100"  // Combine classes in a single string
            src={image1}
            alt="Slide 1"
            fluid
          />

          <div className="overlay">
          <Carousel.Caption style={{ fontWeight:'900', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <h2 style={{ fontSize: '3.5em', marginBottom:'55px' }}>Welcome to The Ultimate Smart Storage Solution</h2>
            <button className="btn btn-primary">Book Now</button>
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
          <Carousel.Caption style={{ fontWeight:'900', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <h2 style={{ fontSize: '3.5em' }}>Storage Solution</h2>
            <p>A highly efficient and affordable storage solution catering
              for all your possible storage needs.Simple, Fast and Affordable storage 
              services.</p>

              <Row className='cards-info' style={{ marginTop:'55px' }}>

              <Col xs={12} md={3} lg={3}>
                  <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} md={3} lg={3}>
                  <Card style={{ }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} md={3} lg={3}>
                  <Card style={{ }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>


                <Col xs={12} md={3} lg={3}>
                  <Card style={{ }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeaderCarousel;
