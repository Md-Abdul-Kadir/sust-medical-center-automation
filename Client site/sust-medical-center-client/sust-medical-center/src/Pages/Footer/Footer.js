import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light-theme py-4">
            <h3 className="pt-5">Thanks for joining with us</h3>
            {/* <p className="text-primary py-3">Live as if you were to die tomorrow. Learn as if you were to live forever.</p>  */}
            <h6><small> &copy; All rights reserved by <span className="spanColor">SUST Medical Center</span></small></h6> 
        </div>
    );
};

export default Footer;