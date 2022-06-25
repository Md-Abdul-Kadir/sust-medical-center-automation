import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesShow.css'

const ServicesShow = (props) => {
    const {title,fee,descrption,picture,enroll,id } = props.service;
    return (
        <div>
            
             <Card className="h-100 shadow-lg border-0">
               <CardImg className="imgHeight w-100" src={picture} />
                <Card.Body>
                    <h3 className="themeColorCard">{title}</h3>
                    <h6 className="text-danger">Monthy Fee : {fee}</h6>
                <Card.Text>
                        {descrption}
                        
                </Card.Text>
                </Card.Body>
                    <Card.Footer>
                    <h6 className="text-success">Enroll : {enroll} people</h6>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-secondary py-1 my-2">Book { title}</button>
                    </Link>
                </Card.Footer>
            </Card>
    
 
  
        </div>
    );
};

export default ServicesShow;