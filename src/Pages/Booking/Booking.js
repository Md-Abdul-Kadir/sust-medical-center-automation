import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import './Booking.css'

const Booking = () => {
    const { bookingid } = useParams();
    return (
        <div>
            <NavigationBar></NavigationBar>
            
            <div className="py-5 bookingbanner">
              <h2 className="fs-1 pExtra text-light">Booking</h2>
              <p className="fs-6 text-secondary">Home / Booking</p>
            </div>
            <h2 className="my-5 text-danger py-5">Congratulations !!!!!!!!!!! <br />your booking done</h2>
            <Footer></Footer>
        </div>
    );
};

export default Booking;