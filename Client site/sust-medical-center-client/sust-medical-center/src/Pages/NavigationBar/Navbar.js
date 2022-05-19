
import React from 'react';
import { Button, Container, Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../Images/Banner/sustlogo/logo.png';
import callicon from '../../Images/icons/phone-icons.png';
import amboIcon from '../../Images/icons/ambulance-lights.png';

const NavigationBar = () => {

    return (
        <>
          
                    
                    {/* <span className="text-light">{ user.displayName}</span>
                    <button onClick={signInUsingGoogle} className="btn-outline-secondary px-4 py-2 rounded"> LOG IN</button> */}
                    
          
            
            <div className="sticky-top bg-white">

            <div className="py-1 mx-auto container bg-white row px-0">
                    <div className="d-flex col-md-5">
                    <p className="pt-2"><img src={logo} height="75px" alt="this is a logo of sust" /></p>
                   <div className="px-3 my-auto ms-0 text-start">
                    <h3 className="fw-bold text-black text-align-left">SUST MEDICAL CENTER</h3>
                    <p className="text-secondary my-0">Care That Never Quits</p>
                  </div>
                    </div>
                    <div className="col-md-3 my-auto d-flex">

                        <div><img src={callicon} alt="This is a call icon" height="40px" className="px-3 pt-1"/></div>
                    
                        <div className="text-start">
                        <h6 className="fw-bold">Emergency Helpline</h6>
                        <p>01739-36852</p>
                        </div>

                    </div>
                    <div className="col-md-4 my-auto d-flex">
                       <div><img src={amboIcon} alt="This is a call icon" height="50px" className="px-3"/></div>
                        <div>
                        <h6 className="text-start fw-bold">Ambulance Service</h6>
                        <p className="text-start">0176464646</p>
                       </div>


                   </div>
            </div>
            <nav class="navbar navbar-expand-lg text-light nav_color sticky-top navitem">
            
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav text-light">
                  <Nav.Link className="text-light pe-4" as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link className="text-light px-4" as={Link} to="/treatment ">Treatment</Nav.Link>
                   <Nav.Link className="text-light px-4" as={Link} to="/appointment">Appointment</Nav.Link>
                    <Nav.Link className="text-light px-4" as={Link} to="/clearance">Clearance</Nav.Link>
                    <Nav.Link className="text-light px-4"  as={Link} to="/covidcare">Covid-Care</Nav.Link>
                    <Nav.Link className="text-light px-4" as={Link} to="/aboutus">About Us</Nav.Link>
                    <Nav.Link className="text-light ps-4" as={Link} to="/contactus">Contact Us</Nav.Link>
                    
                            
                            
                </div>
                </div>
            </div>
            </nav>
            </div>
        </>
    );
};

export default NavigationBar;