import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light py-4">
            <h2 className="pt-5">Thanks for joining with us</h2>
            <p className="gray">Live as if you were to die tomorrow. Learn as if you were to live forever.</p> 
            <h6><small> &copy; All rights reserved by <span className="crimson">SUST Medical Center</span></small></h6> 
        </div>
    );
};

export default Footer;