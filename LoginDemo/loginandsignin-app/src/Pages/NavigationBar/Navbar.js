
import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'


const NavigationBar = () => {
    
    return (
        <>
                    {/* <span className="text-light">{ user.displayName}</span>
                    <button onClick={signInUsingGoogle} className="btn-outline-secondary px-4 py-2 rounded"> LOG IN</button> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container">
                <h5 className="text-white my-auto">SUST<span className="text-danger"> Medical Center</span></h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto px-5">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="mx-3" as={Link} to="/login">LogIn</Nav.Link>
                            <button className="btn btn-danger "><Nav.Link className="text-light my-0 py-1" as={Link} to="/register">SignIn</Nav.Link></button>
                </div>
                </div>
            </div>
            </nav>
        </>
    );
};

export default NavigationBar;