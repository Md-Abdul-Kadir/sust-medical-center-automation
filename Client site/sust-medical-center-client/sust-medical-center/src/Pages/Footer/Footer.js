import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
    <div className="bg-dark text-light ">
    <section class="pt-5 container">
    <div class="row ">
      <div class="col-6 col-md-2 mb-4 text-start ">
        <h5 className="pb-3">Section</h5>
        <ul class="nav flex-column ms-0">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-start">
        <h5 className="pb-3">Section</h5>
        <ul class="nav flex-column text-start">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-start">
        <h5 className="pb-3">Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    </section>

    <div class=" d-flex flex-column flex-sm-row justify-content-between  bg-black text-white mb-0 mt-4">
        <div className="d-flex container mt-4 py-2">
        <h6 className="text-secondary"><small> &copy; All rights reserved by <span className="text-white">  SUST Medical Center</span></small></h6>
      <ul class="list-unstyled d-flex ms-auto">
              <li class="ms-3 text-light"> <img height="30px" src="https://cdn-icons-png.flaticon.com/512/1312/1312139.png" alt="" /> </li>
             
              <li class="ms-3 text-light"> <img height="30px" src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="" /> </li>

              <li class="ms-3 text-light"> <img height="30px" src="https://cdn-icons-png.flaticon.com/512/134/134937.png" alt="" /> </li>
       
      </ul>
    </div>
       </div> 
       </div>
    );
};

export default Footer;