import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook,faSquareCheck, faHandshake } from "@fortawesome/free-solid-svg-icons";

const Choose = () => {
  
  return (
    <>
    <Container fluid className="choose-body pt-5  d-flex justify-content-center align-items-center flex-column">
    <div className="header-info d-flex justify-content-center align-items-center text-center">
          <h2>Why Choose Us</h2>
        </div>
        <div className="simple-heading d-flex justify-content-center align-items-center text-center  pt-2">
                    <p>
With our smart and advanced storage facilities, our user friendly online platform, our affordable prices and our storage by the box concept this gives us a unique edge over our competitors.</p>
         </div>
       
         <Row className="py-3 px-3">
            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faAddressBook} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">ECO FRIENDLY STORAGE</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faSquareCheck} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">PRIME LOCATION</Card.Title>
                        </Card.Body>
                </Card>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faHandshake} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">ADVANCE FACILITY STORAGE</Card.Title>
                        </Card.Body>
                </Card>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faHandshake} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">NEAT & CLEAN</Card.Title>
                        </Card.Body>
                </Card>
            </Col>
         </Row>


         <Row className="py-3 px-3">
            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6} >
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faAddressBook} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">AFFORDABLE PRICE</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faSquareCheck} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">SURVEILLANCE</Card.Title>
                        </Card.Body>
                </Card>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faHandshake} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">ROUND THE CLOCK SECURITY</Card.Title>
                        </Card.Body>
                </Card>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faHandshake} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">YOU ARE ALL DONE</Card.Title>
                        </Card.Body>
                </Card>
            </Col>
         </Row>

         <Row className="py-3 px-3">
            <Col>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faAddressBook} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">CONTACT US</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faSquareCheck} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">FIND YOUR IDEAL DEAL</Card.Title>
                        </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="choose-card d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faHandshake} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">YOU ARE ALL DONE</Card.Title>
                        </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="choose-card  d-flex justify-content-center align-items-center p-3" >
                <div className='choose-icon-circle'>
                <FontAwesomeIcon className="choose-icon" icon={faHandshake} />
                </div>
                    <Card.Body>
                        <Card.Title className="choose-title">YOU ARE ALL DONE</Card.Title>
                        </Card.Body>
                </Card>
            </Col>
         </Row>
        
    </Container>
    </>
  );
};

export default Choose;
