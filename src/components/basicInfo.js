import React from "react";
import { Container, Button, Card,Row ,Col} from "react-bootstrap";

function BasicInfo() {
  return (
    <>
      <Container fluid className="basic-info-body py-5  d-flex justify-content-center align-items-center flex-column">
        <div className="header-info text-center d-flex justify-content-center align-items-center">
          <h2>Smart Storage Solution</h2>
        </div>
        <div className="simple-heading text-center pt-5">
                    <h3>Simply just pay for what you store!</h3>
                    <p>
No deposits, no hidden charges and no need to rent an entire storage unit just pay for what you store. Our smart storage concept is ideal for those with fewer items enabling you to save money, time and energy.</p>
         </div>
         <Row className="py-5 px-5 ">
            <Col>
                <Card className="basic-info-cards" >
                    <Card.Img variant="top" src="https://boxxnstore.com/wp-content/uploads/2022/10/Untitled-2-2048x2048.jpg" />
                    <Card.Body>
                        <Card.Title className="basic-title">WE COLLECT</Card.Title>
                        <Card.Text>
                        Simply call us or book online and our professionals will pack, wrap, tag and collect all your items with the utmost care and consideration.
                        </Card.Text>
                        <Button variant="primary" className="basic-info-cards-button">Contact us</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="basic-info-cards" >
                    <Card.Img variant="top" src="https://boxxnstore.com/wp-content/uploads/2022/10/We-store-resize-2035x2048.jpg" />
                    <Card.Body>
                        <Card.Title className="basic-title">WE STORE</Card.Title>
                        <Card.Text>
                        Unique bar codes will be assigned to each item. Items will be stored in a safe and secure environment with 24/7 surveillance.
                        </Card.Text>
                        <Button variant="primary" className="basic-info-cards-button">Contact us</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="basic-info-cards" >
                    <Card.Img variant="top" src="https://boxxnstore.com/wp-content/uploads/2022/10/WE-DELIVER-RESIZE-2048x2048.jpg" />
                    <Card.Body>
                        <Card.Title className="basic-title">WE DELIVER</Card.Title>
                        <Card.Text>
                        Call us or book online, advice us of the delivery address and time. Our staff will deliver at your door step and assist in the unpacking.


                        </Card.Text>
                        <Button variant="primary" className="basic-info-cards-button">Contact us</Button>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
         
      </Container>
    </>
  );
}

export default BasicInfo;
