import React from "react";
import "./ProfileEdit.css";
import akashdp from "../../Images/Profilep/akashpp.png";
import NavigationBar from "../NavigationBar/Navbar";
import Footer from "../Footer/Footer";

const ProfileEdit = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div class="container rounded bg-white my-5 shadow-lg">
        <div class="row" >
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded mt-5" width="150px" src={akashdp} />
              <span class="font-weight-bold mt-3">Abdul Kader Akash</span>
              <span class="text-black-50">akashsust55@gmail.com</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-right text-theme text-bold">Profile Settings</h4>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="first name"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Surname</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="surname"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter phone number"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Sex</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Sex"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Area</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email id"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="country"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Division</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Division"
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary bg-theme text-light w-50" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-2 py-5">
              <div class="d-flex justify-content-between experience">
                <h4 className="text-theme">Edit Educational Info</h4>
              </div>
              <div class="col-md-12">
                <label class="labels text-start">Departpment</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Dept."
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Registration No</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Reg. No"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProfileEdit;
