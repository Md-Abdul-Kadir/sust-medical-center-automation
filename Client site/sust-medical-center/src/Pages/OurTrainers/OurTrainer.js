import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import './OurTrainer.css';
import best1 from '../../Images/Trainer/t1.jpg';
import best3 from '../../Images/Trainer/t3.jpg';
import best4 from '../../Images/Trainer/t4.jpg';

const OurTrainer = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="toptrainer text-light">
                <h1 className="pExtratrainer">Our Trainers</h1>
                <p className="text-secondary">Home / Our Trainer</p>
            </div>
            
            <div className="py-5">
                <h1>Choose our best Trainers</h1>
                <p>Whatever your fitness goal, our personal trainers can offer
                 one-to-one sessions and classes.</p>
            </div>
            <Container>
            <CardGroup className="my-5 ">
            <Card className="mx-2 shadow-lg">
                        <Card.Img variant="top" src={ best1}/>
                <Card.Body>
                <Card.Title className="fw-bold">Jhon Sina</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                            <small className="text-warning">
                                <i class="fas fa-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </i></small>
                </Card.Footer>
            </Card>
            
            <Card className="mx-2 shadow-lg">
                <Card.Img variant="top" src={ best3} />
                <Card.Body>
                <Card.Title className="fw-bold">Mogran Jhone</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                            <small className="text-warning">
                                <i class="fas fa-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </i></small>
                </Card.Footer>
            </Card>
            <Card className="mx-2 shadow-lg">
                <Card.Img variant="top" src={ best4} />
                <Card.Body>
                <Card.Title className="fw-bold">Sunny Juliya</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                            <small className="text-warning">
                                <i class="fas fa-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </i></small>
                </Card.Footer>
            </Card>
            </CardGroup>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default OurTrainer;