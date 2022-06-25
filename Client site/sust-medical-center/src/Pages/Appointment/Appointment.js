import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import './Appointment.css'
import clcokicon from '../../Images/icons/clock.png'
import helpline from '../../Images/helplineIcon.png'
import locicon from '../../Images/icons/location-pin.png'
import callicon from '../../Images/icons/phone-call.png'
import mailicon from '../../Images/icons/email.png'


const Appointment = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            {/* contact section */}
            <div>

                {/* top image */}
                <div className="top-banner">
                 <h3 className="big-txt">Appointment</h3>
                 <p className="text-white">Home / Appointment</p>
                </div>
            
                {/* main section */}
                <div className="container py-5">
                <div className="row py-5">
                    <div className="col-8">
                            <h3 className="text-theme text-start fw-bold">Appointment Form</h3>
                            <form action="" className="text-start">
                                <div className="d-flex pt-4">
                                    <div className="w-50 pe-lg-4">
                                    <p className="text-start mb-1">Name<span className="spanRed">*</span> </p>
                                        <input type="text" name="contactName" id="" className="w-100 h-75 pe-3"/>
                                   </div>
                                    <div className="w-50 px-lg-3">
                                    <p className="text-start mb-1">Email<span className="spanRed">*</span></p>
                                    <input type="text" name="email" id="" className="w-100 h-75"/>
                                   </div>
                                </div>
                                <div className="d-flex pt-5">
                                 <div className="w-50 pe-lg-4">
                                    <p className="text-start mb-1">Phone<span className="spanRed">*</span></p>
                                    <input type="text" name="phone" id="" className="w-100 h-75 pe-3  "/>
                                </div>
                                <div className="w-50 px-lg-3">
                                    <p className="text-start mb-1">Appointment For<span className="spanRed">*</span></p>
                                    <select id="cars" name="cars" className="w-100 h-75 ps-2">
                                    <option value="fever">Fever</option>
                                    <option value="covid">Covid-19</option>
                                    <option value="headaches">Headaches</option>
                                    <option value="stomach-aches">Stomach Aches</option>
                                      <option value="diarrhea">Diarrhea</option>
                                      <option value="c-cold">Common cold</option>
                                      <option value="pneumonia">Pneumonia</option>
                                      <option value="infectious">Infectious </option>
                                      </select>
                                    </div>
                                    
                                </div>
                                <div className="d-flex pt-5">
                                 <div className="w-50 pe-lg-4">
                                    <p className="text-start mb-1">Date<span className="spanRed">*</span></p>
                                    <input type="date" name="date" id="" className="w-100 h-75 pe-3 ps-2  "/>
                                </div>
                                <div className="w-50 px-lg-3">
                                    <p className="text-start mb-1">Preferred Time<span className="spanRed">*</span></p>
                                        {/* <input type="text" name="Appointment" id="" className="w-100 h-75"/> */}
                                    <select id="cars" name="cars" className="w-100 h-75 ps-2">
                                            <option value="slot-1">10.00 to 10.30</option>
                                            <option value="slot-1">10.30 to 11.00</option>
                                            <option value="slot-1">11.00 to 11.30</option>
                                            <option value="slot-1">11.30 to 12.00</option>
                                            <option value="slot-1">12.30 to 01.00</option>
                                            <option value="slot-1">02.00 to 02.30</option>
                                            <option value="slot-1">02.30 to 03.00</option>
                                            <option value="slot-1">03.00 to 03.30</option>
                                            <option value="slot-1">03.30 to 04.00</option>
                                            <option value="slot-1">04.00 to 04.30</option>
                                            <option value="slot-1">04.30 to 05.00</option>

                                      </select>
                                    </div>
                                    
                                </div>

                                <div className="pt-5 pe-lg-3">
                                    <p className="mb-1 text-start">Message</p>
                                    <textarea name="ContactArea" className="w-100 h-100" id="" cols="30" rows="6"></textarea>
                                </div>
                                <input type="submit" value="Make in Appointment" className="border-0 bg-theme text-white px-5 py-3 my-4" />
                            </form>

                            {/* facilities section */}
                            <div className="div-facilities text-start border border-secendary p-4 my-5 me-lg-3">
                                <h3 className="txt-theme my-4">Our Facilities</h3>

                                <div className="mt-5">
                                    <h5>24/7 Hour Available</h5>
                                    <p>Integer nec nisi sed mi hendrerit mattis. Vestibulum mi nunc, ultricies quis vehicula et, iaculis in magnestibulum quis ultricies quis vehicula et feugiat risus.</p>
                                </div>
                                <div className="mt-4">
                                    <h5>Experienced Staff Available</h5>
                                    <p>Aliquam sit amet mi eu libero fermentum ultricies quis vehicula et quis feugiat risus bibendum pulvinar a turpis. Vestibulum quis feugiat risus.</p>
                                </div>
                                <div className="mt-4">
                                    <h5>All Services are free only for SUSTian</h5>
                                    <p>Praesent eu sollicitudin nunc. Cras malesuada ultricies quis vehicula et vel quis feugiat risus nisi consequat pretium. Integer auctor elementum nulla suscipit in.</p>
                                </div>

                            </div>
            

             
          


                    </div>
                        <div className="col-4">
                            

                         {/* book appointment side section    */}
                        <div className="bg-offwhite mb-5">
                               
                               <div className="d-flex py-4 justify-content-center align-self-center bbb">
                                 
                                   <img src={helpline} alt="" height="50px"/>
                                 
                                   
                               
                               </div>
                               <div className="text-dark p-4">
                                   
                                    <div className=" py-">
                                       <h6 className="fw-bold py-2 text-start ps-3">BOOK YOUR APPOINTMENT</h6>
                                       <p className="text-start px-3 py-2 ">You can book a first consultation meeting which is free of charge, to talk about what you are looking for.</p>
                                    </div>
                                    <div className="py-3 text-center bg-theme text-light">
                                       
                                       <h5 className="my-auto"> 01799-666333</h5>
                                    </div>

                               </div>
                               
                           </div> 

                            {/* opening time secton */}
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
                                 
                                   <h5 className="mx-auto fw-bold my-auto txt-theme">CONTACT INFO</h5>
                                 
                                   
                               
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
        
            <Footer></Footer>
        
            
        </div>
    );
};

export default Appointment;