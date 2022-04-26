import React from 'react';
import './CovidCare.css';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';
import p1 from '../../Images/CovidCare/hero (1).png';
import p2 from '../../Images/CovidCare/Group 15404second.png';
import p3 from '../../Images/CovidCare/contagion/Group 18544air.png';
import p4 from '../../Images/CovidCare/contagion/Group 18542hmm2.png';
import p5 from '../../Images/CovidCare/contagion/Group 18540object2.png';
import p6 from '../../Images/CovidCare/Group 15444sym.png';
import p7 from '../../Images/CovidCare/precusions/Mask.png';
import p8 from '../../Images/CovidCare/precusions/Mask girlwash.png';
import p9 from '../../Images/CovidCare/precusions/sympt.png';
import p10 from '../../Images/CovidCare/precusions/Maskavoid.png';
import p11 from '../../Images/CovidCare/map (3).png';


const CovidCare = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
       <div class="bg-body">
         <header>
      

        {/* banner section  */}

        <section class="container my-5" >
            <div class="row d-flex align-items-center">
                <div class="col-12 col-lg-6 ">
                    <h3 class="h3-color">COVID-19 ALERT</h3>
                     <h1 class="h1-color">Stay at Home quarantine To stop Corona virus
                    </h1>
                    <p>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .
                    </p>
                    <button class="btn btn-color text-white rounded-pill">LET US HELP</button>
                </div>
                <div class="col-12 col-lg-6">
                    <img class="img-fluid" src={p1} alt=""/>
                </div>
            </div>
        </section>
            {/* banner section end */}

    </header>
    <main>
        {/*  about corona section start */}
        <section class="container" id="Overview">
            <div class="row my-5 d-flex align-items-center">
                <div class="col-12 col-lg-6">
                    <img class="img-fluid" src={p2} alt=""/>
                </div>
                <div class="col-12 col-lg-6">
                    <h4 class="h3-color">What is Covid-19
                    </h4>
                    <h1 class="h1-color">Coronavirus</h1>
                   <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response
                   </p>
                   <button class="btn btn-color text-white rounded-pill">LEARN MORE</button>
                </div>
            </div>
        </section>

       

        {/*  CONTAGION SECTION START  */}
        <section class="container text-center my-5" id="Contagion">
            <h4 class="h3-color">Covid-19
            </h4>
            <h1 class="h1-color">Contagion
            </h1>
            <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</p>
            <div class="row row-cols-1 row-cols-md-3 g-4 border-0 my-5">
                <div class="col">
                  <div class="card h-100 border-0 shadow-lg p-2">
                    <img src={p3} class="card-img-top" alt="..."/>
                  
                    <div class="card-body">
                      <h4 class="card-title text-danger fw-bold mt-3">Air Transmission
                    </h4>
                      <p class="card-text py-3">Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify
                    </p>
                    </div>
                    <div class="">
                        <button class="btn btn-danger w-100">Learn more</button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100 border-0 shadow-lg p-2">
                    <img src={p4} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h4 class="card-title text-danger fw-bold mt-3">Human Contacts
                    </h4>
                      <p class="card-text py-3">Washing your hands is one of thesimplest ways you can protect
                    </p>
                    </div>
                    <div class="">
                       <button class="btn btn-danger w-100">Learn more</button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100 border-0 shadow-lg p-2">
                    <img src={p5} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h4 class="card-title text-danger fw-bold mt-3">Containted Objects
                    </h4>
                      <p class="card-text py-3">Use the tissue while sneezing,In this way, you can protect your droplets.
                    </p>
                    </div>
                    <div class="">
                        <button class="btn btn-danger w-100">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            
        </section>
        {/* <!-- contagion section end --> */}


        {/* <!-- Symptoms section start --> */}
        <section class="container text-center extra-margin-top" id="Symptons">
            <div>
                <h4 class="h3-color">Covid-19
                </h4>
                <h1 class="h1-color">Symptomps
                </h1>
                <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type
                </p>
            </div>
            <div>
                <img class="img-fluid" src={p6} alt=""/>
            </div>
        </section>
        {/* <!-- symptoms section end --> */}


        {/* <!-- Prevension section start --> */}
        <section class="container my-5 " id="Prevension">
            <h4 class="h3-color text-center">Covid-19
            </h4>
            <h1 class="h1-color text-center">What should we do
            </h1>
            <p class="text-center">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type
            </p>
           <div class="row d-flex my-5 align-items-center">
               <div class="col-12 col-lg-6">
                 <h2 class="h2-color my-3"> <span class="pc">01</span> Wear Masks</h2>
                 <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
               </div>

               <div class="col-12 col-lg-6">
                <img class="img-fluid" src={p7} alt=""/>
               </div>

            </div>
            <div class="row d-flex my-lg-4 align-items-center">
               
               <div class="col-12 col-lg-6">
                <img class="img-fluid" src={p8} alt=""/>
               </div>

               <div class="col-12 col-lg-6">
                 <h2 class="h2-color my-3"><span class="pc">02</span> Wash Your Hands
                </h2>
                 <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
               </div>

            </div>
            <div class="row d-flex my-lg-4 align-items-center">
                <div class="col-12 col-lg-6">
                  <h2 class="h2-color my-3"><span class="pc">03</span> Use nose - rag
                </h2>
                  <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                </div>
 
                <div class="col-12 col-lg-6">
                 <img class="img-fluid" src={p9} alt=""/>
                </div>
 
             </div>
            <div class="row d-flex my-lg-4 align-items-center">
               
               <div class="col-12 col-lg-6">
                <img class="img-fluid" src={p10} alt=""/>
               </div>

               <div class="col-12 col-lg-6">
                 <h2 class="h2-color my-3"><span class="pc">04</span> Avoid contacts
                </h2>
                 <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
               </div>

            </div>
        </section>
        <section class="container">
            <div>
                <img class="img-fluid" src={p11} alt=""/>
            </div>
        </section>
        {/* <!-- Prevension section end --> */}
    </main>

    
    </div>


            <Footer></Footer>
        </div>
    );
};

export default CovidCare;