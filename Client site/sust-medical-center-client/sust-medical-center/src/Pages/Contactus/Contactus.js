
import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import './Contactus.css'
import clcokicon from '../../Images/icons/clock.png'
import locicon from '../../Images/icons/location-pin.png'
import callicon from '../../Images/icons/phone-call.png'
import mailicon from '../../Images/icons/email.png'
import GoogleMap from '../GoogleMap/GoogleMap';

const Contactus = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            {/* contact section */}
            <div>

                {/* top image */}
               <div className="top-banner">
                 <h3 className="big-txt">Contact Us</h3>
                 <p className="text-white">Home / Contact Us</p>
                </div>
            
                {/* main section */}
                <div className="container py-5">
                <div className="row py-5">
                    <div className="col-8">
                            <h3 className="text-theme text-start fw-bold">Get In Touch</h3>
                            <form action="" className="text-start">
                                <div className="d-flex pt-4">
                                    <div className="w-50 pe-lg-4">
                                    <p className="text-start mb-1">Name</p>
                                        <input type="text" name="contactName" id="" className="w-100 h-75 pe-3"/>
                                   </div>
                                    <div className="w-50 px-lg-3">
                                    <p className="text-start mb-1">Email</p>
                                    <input type="text" name="contactName" id="" className="w-100 h-75"/>
                                   </div>
                                </div>
                                <div className="d-flex pt-5">
                                    <div className="w-50 pe-lg-4">
                                    <p className="text-start mb-1">Phone</p>
                                    <input type="text" name="contactName" id="" className="w-100 h-75 pe-3  "/>
                                   </div>
                                    <div className="w-50 px-lg-3">
                                    <p className="text-start mb-1">Appointment For</p>
                                    <input type="text" name="contactName" id="" className="w-100 h-75"/>
                                   </div>
                                </div>
                                <div className="pt-5 pe-lg-3">
                                    <p className="mb-1 text-start">Message</p>
                                    <textarea name="ContactArea" className="w-100 h-50" id="" cols="30" rows="5"></textarea>
                                </div>
                                <input type="submit" value="SUBMIT" className="bg-theme text-white px-5 py-2 my-4" />
                            </form>
            

             
          


                    </div>
                    <div className="col-4">
                        <div className="bg-theme">
                               
                                <div className="d-flex py-4 justify-content-center align-self-center bb">
                                    <img src={clcokicon} alt="this is a clok icon" height="25px" />
                                    <h5 className="ps-3 text-light">OPENING HOURS</h5>
                                  
                                    
                                
                                </div>
                                <div className="text-light p-4">
                                    <div className="d-flex py-1">
                                        <p>sunday :</p>
                                        <p className="ms-auto">8.00am - 5.00pm</p>
                                    </div>
                                    <div className="d-flex py-1">
                                        <p>Monday :</p>
                                        <p className="ms-auto">8.00am - 5.00pm</p>
                                    </div>
                                    <div className="d-flex py-1">
                                        <p>Tuesday :</p>
                                        <p className="ms-auto">8.00am - 5.00pm</p>
                                    </div>
                                    <div className="d-flex py-1">
                                        <p>Wednesday :</p>
                                        <p className="ms-auto">8.00am - 5.00pm</p>
                                    </div>
                                    <div className="d-flex py-1">
                                        <p>Thursday :</p>
                                        <p className="ms-auto">8.00am - 5.00pm</p>
                                    </div>
                                    <div className="d-flex py-1">
                                        <p>Friday :</p>
                                        <p className="ms-auto ">Closed</p>
                                    </div>
                                    <div className="d-flex py-1">
                                        <p>Saturday :</p>
                                        <p className="ms-auto">Closed</p>
                                    </div>

                                </div>
                                
                            </div>
                            
                            {/* contact info */}
                            <div className="bg-offwhite mt-5">
                               
                               <div className="d-flex py-4 justify-content-center align-self-center bbb">
                                 
                                   <h5 className="ps-3 fw-bold ">CONTACT INFO</h5>
                                 
                                   
                               
                               </div>
                               <div className="text-dark p-4">
                                   
                                   <div className="d-flex py-1">
                                       <img src={locicon} alt="" height="28px" className="mx-3 my-2"/>
                                       <p className="ps-2 text-start">Shahjalal University of Science and technology, Sylhet</p>
                                    </div>
                                    <div className="d-flex py-2">
                                       <img src={callicon} alt="" height="25px" className="mx-3"/>
                                       <p className="ps-2">+88 01791-615539</p>
                                    </div>
                                    <div className="d-flex py-1">
                                       <img src={mailicon} alt="" height="25px" className="mx-3"/>
                                       <p className="px-2">sust.help@gmail.com</p>
                                   </div>

                               </div>
                               
                       </div>    
                            
                    </div>
                    </div>
                </div>
                
            </div>
           
            <div className="mapview">
            <GoogleMap></GoogleMap>
            </div>
            <Footer></Footer>
        
            
        </div>
    );
};

export default Contactus;