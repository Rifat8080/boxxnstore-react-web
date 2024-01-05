import React from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faLandmark, faPeopleCarry, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';


const Courses = () => {
  return (
    <Container className="ag-format-container justify-content-center align-items-center">
      <Row className="ag-courses_box justify-content-center align-items-center">
        {courseItems.map((course, index) => (
          <Col key={index} xxl={4} xl={4} lg={4} md={12
          } sm={12} xs={12} className='d-flex align-items-center justify-content-center'> 
            <Card className="ag-courses_item text-center mb-lg-5 mb-md-5 mb-sm-5 mb-xsm-5 justify-content-center align-items-center" style={{ width: '25rem',height:'25rem' }} >
              <Card.Link href="#" className="ag-courses-item_link p-3 className='d-flex justify-content-center align-items-center flex-column'">
                <div className="ag-courses-item_bg"></div>
                <div className='ag-icon'>
                <FontAwesomeIcon  icon={course.icon}/>
                </div>
                 
                <Card.Body >
                  <Card.Title className="ag-courses-item_title" style={{color:'#FFFFF'}}>
                    {course.title}
                  </Card.Title>

                  {course.startDate && (
                    <div className="ag-courses-item_date-box">
                       <span className="ag-courses-item_date">{course.startDate}</span>
                    </div>
                  )}

                <Button variant="primary" className="ag-button" href='https://boxxnstore.com/' >
                  Chat Now
                </Button>
                </Card.Body>
               
              </Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const courseItems = [
  {
    title: 'STORAGE',
    startDate: 'Our advanced storage facilities are designed to provide a variety of storage services from lockable storage units of varying sizes to individual storage boxes.  With unique bar coding system for office inventory, furniture and document all your office storage requirements are taken care of.',
    icon: faLandmark,
  },
  {
    title: 'MOVING & RELOCATION',
    startDate: 'Moving or relocating can be incredibly overwhelming. Let us make it simple and stress free. With a professional team of movers and packers, onboard insurance, quality packing materials and the most competitive prices around it is no surprise we can boast a track record to be proud of.',
    icon:faPeopleCarryBox,
},
  {
    title: 'BOXES & PACKING',
    startDate: 'The quality of packing materials is crucial to ensure the safety of your belongings. At BoxxnStore we provide a variety of packing materials ranging from carton boxes, bubble wraps, a range of tapes, cardboard rolls, wrap film, shipping boxes, mattress covers, cardboard boxes and much more at your door step.',
    icon: faBoxOpen,
}
];

export default Courses;
