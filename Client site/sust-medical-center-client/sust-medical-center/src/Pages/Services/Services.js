import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import ServicesShow from '../ServicesShow/ServicesShow';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setServices(data));
        
    },[])
    return (
        <div>
         <NavigationBar></NavigationBar>
          
            <div className="servicesStyle servicebanner">
              <h2 className="fs-1 pExtra text-big">Services</h2>
              <p className="fs-6 text-secondary">Home / Services</p>
            </div>
            <Container>
                <h1 className="text-secondary pExtra">Find Our World class Services</h1>
                <p>Stay healthy , stay fit</p>
            <Row xs={1} md={3} className="g-5 my-3">
                {
                    services.map(service => <ServicesShow
                        service={service}
                        key={service.id}
                    ></ServicesShow>) 

               }
           </Row>
            </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Services;

/*23310377*/