import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import './Aboutus.css'
import ab from '../../Images/aboutus.jpg'

const Aboutus = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="top-banner">
                 <h3 className="big-txt">About Us</h3>
                 <p className="text-white">Home / About Us</p>
            </div>
            <div className="d-flex py-5 container margin10 text-start">
                <div className="w-50 h-100 px-3 justify-between">
                    <h3 className="mb-5">Let's Know About <br /> <span className="textsust">SUST MEDICAL CENTER</span></h3>
                    <p>The Health Service Centre, SUST located near the central auditorium just opposite to the basket ball ground , offers free experienced general practitioner and emergency medical care services to all members of the University community: students (undergraduate and post graduate), teachers ,staffs and their families in a user-friendly efficient environment. Students get medicine from the Centre at free of cost but they need to show their Medical card at all consultations and employees get medicine at minimum cost. The Centre provides service round the clock, seven days a week. The centre also has an ambulance.</p>
                </div>
                <div className="w-50">
                    <img src={ab} alt="" className="s-pic m-0 p-0" />
                </div>
              
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Aboutus;