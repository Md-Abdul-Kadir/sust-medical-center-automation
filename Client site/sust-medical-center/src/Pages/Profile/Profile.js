import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import akashdp from "../../Images/Profilep/akashpp.png";
import nameicon from "../../Images/profileicon/name.png";
import eduicon from "../../Images/profileicon/edu.png";
import emailicon from "../../Images/profileicon/email.png";
import locationicon from "../../Images/profileicon/location.png";
import gendericon from "../../Images/profileicon/sex.png";
import NavigationBar from "../NavigationBar/Navbar";
import Footer from "../Footer/Footer";

const Profile = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div class="row py-5 px-4">
        <div class="col-md-8 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">

            <div class="px-4 pt-0 pb-4 mb-5 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3 imgmargin">
                  <img
                    src={akashdp}
                    alt="..."
                    width="140"
                    class="rounded mb-2 img-thumbnail"
                  />
                  <Link to="/profile-edit">
                    <button class="btn btn-outline-dark bg-theme text-light btn-block ">
                      Edit profile
                    </button>
                  </Link>
                </div>
                <div class="media-body mb-5 text-white">
                  <h4 class="mt-0 mb-0">Abdul Kader Akash</h4>
                  <p class="small mb-4">
                    <i class="fas fa-map-marker-alt mr-2"></i>New York
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">215</h5>
                  <small class="text-muted">
                    <i class="fas fa-image mr-1"></i>Photos
                  </small>
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">745</h5>
                  <small class="text-muted">
                    <i class="fas fa-user mr-1"></i>Followers
                  </small>
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">340</h5>
                  <small class="text-muted">
                    <i class="fas fa-user mr-1"></i>Following
                  </small>
                </li>
              </ul>
            </div> */}
            <div class="px-4 py-5">
              <h5 class="my-3 text-start fw-bold text-theme">About</h5>
              <div class="p-md-4 p-3 rounded-3 shadow-sm bg-light">
                <div className="d-flex">
                  <img width="25px" height="25px" src={eduicon} alt="" />
                  <p className="ps-3 my-auto ">
                    Shahjalal University of Science and technology, Sylhet
                  </p>
                </div>
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={nameicon} alt="" />
                  <p className="ps-3 my-auto">Dept. of CSE</p>
                </div>
                <div className="d-flex">
                  <img width="25px" height="25px" src={emailicon} alt="" />
                  <p className="ps-3 my-auto">akashsust55@gmail.com</p>
                </div>
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={locationicon} alt="" />
                  <p className="ps-3 my-auto">Akhaliya Sylhet</p>
                </div>
                <div className="d-flex">
                  <img
                    width="25px my-auto"
                    height="25px"
                    src={gendericon}
                    alt=""
                  />
                  <p className="ps-3">Male</p>
                </div>
              </div>
            </div>
            <div class="py-4 px-4 mt-53">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="mb-0">Recent Prescriptions</h5>
              </div>
              <div class="row">
                <div class=" my-3 pr-lg-1 d-flex bg-theme p-2 rounded-3 text-light shadow-lg">
                  <date className="my-auto w-25">22/7/2020</date>
                  <p className="my-auto w-50">Headaches and Fever </p>
                  <button className="btn btn-light w-25">View Details</button>
                </div>
                <div class=" my-3 pr-lg-1 d-flex bg-theme p-2 rounded-3 text-light shadow-lg">
                  <date className="my-auto w-25">10/7/2020</date>
                  <p className="my-auto w-50">Common cold</p>
                  <button className="btn btn-light w-25">View Details</button>
                </div>
                <div class=" my-3 pr-lg-1 d-flex bg-theme p-2 rounded-3 text-light shadow-lg">
                  <date className="my-auto w-25">02/7/2020</date>
                  <p className="my-auto w-50">Low pressure</p>
                  <button className="btn btn-light w-25">View Details</button>
                </div>
              </div>
            </div>
            <button className="btn text-light bg-theme w-25 my-5 shadow-lg">Logout</button>
          </div>
          
              </div>
              
              
      </div>

      <Footer></Footer>
    </>
  );
};

export default Profile;
