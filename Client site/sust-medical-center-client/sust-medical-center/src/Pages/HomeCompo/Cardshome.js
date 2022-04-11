import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Cardshome.css'
import s1 from '../../Images/Cards/appointment.png'
import s2 from '../../Images/Cards/clear.png'
import s4 from '../../Images/Cards/covid.png';
import s3 from '../../Images/Cards/online-treatment.png';

const Cardshome = () => {
    return (
        <div>
            <div className="my-5 pt-5">
                <h1 className="text-theme">- Our Services -</h1>
                <p>To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.</p>
            </div>
          
            <CardGroup className="py-5 container">

            <Card className="mx-2 shadow-lg border-0 p-1">
                <Card.Img variant="top" className="h-50 w-50 mx-auto my-md-5" src={s3} />
                    <Card.Body> 
                        
                <Card.Title className="text-theme fs-4 fw-bold">Treatment</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                        
                </Card.Body>
               
               <button className="btn btn-color w-100 text-light p-1">For Treatment</button>
                
            </Card>
        
               
            <Card className="mx-2 shadow-lg border-0 p-1">
                <Card.Img variant="top" className="h-50 w-50 mx-auto my-md-5" src={s1} />
                <Card.Body>
                <Card.Title className="fw-bold fs-4 text-theme">Appointment</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                       
                </Card.Body>
                <button className="btn btn-color w-100 text-light p-1">For Appointment</button>
            </Card>
           
            <Card className="mx-2 shadow-lg border-0 p-1">
                <Card.Img variant="top" className="h-50 w-50 mx-auto my-md-5" src={s4} />
                <Card.Body>
                <Card.Title className="fw-bold fs-4 text-theme">Covid-Care</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                        
                </Card.Body>
                <button className="btn btn-color w-100 text-light p-1">For Covid-Care</button>
            </Card>
                <Card className="mx-2 shadow-lg border-0 p-1 ">
                <Card.Img variant="top" className="h-50 w-50 mx-auto my-md-5" src={s2} />
                <Card.Body>
                <Card.Title className="fw-bold fs-4 text-theme">Clearance</Card.Title>
                <Card.Text>
                Strength training is an essential aspect of any fitness program for both men and women of all ages.
                        </Card.Text>
                       
                </Card.Body>
                <button className="btn btn-color w-100 text-light p-1">For Clearance</button>
            </Card>
            
            </CardGroup>
        
        </div>
    );
};

export default Cardshome;