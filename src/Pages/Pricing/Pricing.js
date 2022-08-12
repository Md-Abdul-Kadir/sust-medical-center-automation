import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import './Pricing.css'
import m1 from '../../Images/Pricing/m1.jpg'
import m2 from '../../Images/Pricing/m2.jpg'
import m3 from '../../Images/Pricing/m3.jpg'
import m4 from '../../Images/Pricing/m4.jpg'

const Pricing = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="pricingbanner">
              <h2 className="pExtraPrice text-light">Pricing</h2>
              <p className="fs-6 text-secondary">Home / Pricing</p>
            </div>
            <Container className="mb-5">
                <div className="my-5 pt-5">
                <h2 className="text-danger">Find your best Deal !!</h2>
                <p>Stay healthy stay happy.</p>
               </div>
            <Row xs={1} md={3} className="g-4">
              
                    <Col>
                    <Card>
                        <Card.Img variant="top"  src={m4} />
                        <Card.Body>
                        <Card.Title className="fw-bold text-secondary">One day pack : 5$</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                   
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={m3} />
                        <Card.Body>
                        <Card.Title className="fw-bold text-secondary">Montly Pack : 30$</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={m2} />
                        <Card.Body>
                        <Card.Title className="fw-bold text-secondary">Yearly Pack : 100$</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={m1} />
                        <Card.Body>
                        <Card.Title className="fw-bold text-secondary">Half yearly pack : 60$</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Pricing;