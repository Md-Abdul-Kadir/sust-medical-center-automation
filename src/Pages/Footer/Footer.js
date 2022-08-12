import React from "react";
import "./Footer.css";
import logo from "../../Images/Banner/sustlogo/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark text-light ">
      <section className="pt-5 container">
        <div className="row ">
          <div className="col-6 col-md-2 mb-4 text-start ">
            <h5 className="pb-3">Academics</h5>
            <ul className="nav flex-column ms-0">
              <li className="nav-item mb-2">Schools</li>
              <li className="nav-item mb-2">IICT</li>
              <li className="nav-item mb-2">CIC</li>
              <li className="nav-item mb-2">Transcripts & Certificates</li>
              <li className="nav-item mb-2">Central Library</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 text-start">
            <h5 className="pb-3">Offices</h5>
            <ul className="nav flex-column text-start">
              <li  className="nav-item mb-2">Office of the VC</li>
              <li className="nav-item mb-2">Office of the Registrar</li>
              <li className="nav-item mb-2">Office of the Treasurer</li>
            </ul>
          </div>

         { /*<div className="col-6 col-md-2 mb-3 text-start">
            <h5 className="pb-3">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Home</li>
              <li className="nav-item mb-2">Features</li>
              <li className="nav-item mb-2">FAQs</li>
              <li className="nav-item mb-2">About</li>
            </ul>
            </div>*/}

          <div className="col-md-5 offset-md-1 mb-4 text-start">
            <div className="d-flex pb-2">
              <p className="pt-2">
                <img src={logo} height="75px" alt="this is a logo of sust" />
              </p>
              <div className="px-3 my-auto ms-0 text-start">
                <h3 className=" text-light text-align-left my-0">
                  SUST MEDICAL CENTER
                </h3>
                <p className="text-secondary my-0">Care That Never Quits</p>
              </div>
            </div>
            <form>
              <p className="my-1">Subscribe to our newsletter</p>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className=" d-flex flex-column flex-sm-row justify-content-between  bg-black text-white mb-0 mt-4">
        <div className="d-flex container mt-4 py-2">
          <h6 className="text-secondary">
            <small>
              
              &copy; All rights reserved by
              <span className="text-white"> SUST Medical Center</span>
            </small>
          </h6>
          <ul className="list-unstyled d-flex ms-auto">
            <li className="ms-3 text-light">
              
              <img
                height="30px"
                src="https://cdn-icons-png.flaticon.com/512/1312/1312139.png"
                alt=""
              />
            </li>

            <li className="ms-3 text-light">
             
              <img
                height="30px"
                src="https://cdn-icons-png.flaticon.com/512/552/552486.png"
                alt=""
              />
            </li>

            <li className="ms-3 text-light">
            
              <img
                height="30px"
                src="https://cdn-icons-png.flaticon.com/512/134/134937.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
