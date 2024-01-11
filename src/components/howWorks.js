import React from "react";
import { Container, Button, Card,Row ,Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook,faSquareCheck,faHandshake } from "@fortawesome/free-solid-svg-icons";

function Basic() {
  return (
    <>
      <Container fluid className="how-works-body py-5  d-flex justify-content-center align-items-center flex-column">
       
        <div className="how-works-heading text-animate text-center pt-5">
                    <h2>Learn How Our Storage Services Work</h2>
                    <p>And get your requested service in less than 2 minutes</p>
         </div>
         <Row className="py-3 px-3">
            <Col xxl={4} xl={4} lg={4} md={12
          } sm={12} xs={12} className="mb-md-1 p-md-5">
                <Card className="how-works-card text-center p-3" >
                <FontAwesomeIcon className="how-works-icon" icon={faAddressBook} />
                    <Card.Body>
                        <Card.Title className="how-works-title">CONTACT US</Card.Title>
                        <Card.Text className="how-works-text">
                        Through our phone, WhatsApp or email
                        </Card.Text>
                        <Button variant="primary" className="how-works-card-button">Chat us</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xxl={4} xl={4} lg={4} md={12
          } sm={12} xs={12} className="mb-md-1 p-md-5">
                <Card className="how-works-card text-center p-3" >
                <FontAwesomeIcon className="how-works-icon" icon={faSquareCheck} />
                    <Card.Body>
                        <Card.Title className="how-works-title">FIND YOUR IDEAL DEAL</Card.Title>
                        <Card.Text className="how-works-text">
                        Visit us or
                         </Card.Text>
                        <Button variant="primary" className="how-works-card-button">Get a quote</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xxl={4} xl={4} lg={4} md={12
          } sm={12} xs={12} className="p-md-5">
                <Card className="how-works-card text-center p-3" >
                <FontAwesomeIcon className="how-works-icon" icon={faHandshake} />
                    <Card.Body>
                        <Card.Title className="how-works-title">YOU ARE ALL DONE</Card.Title>
                        <Card.Text className="how-works-text">
                          Make a payment online or in cash
                        </Card.Text>
                        <Button variant="primary" className="how-works-card-button">Services</Button>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
         
      </Container>
    </>
  );
}

export default Basic;
