import React from "react";
import NavigationBar from "../NavigationBar/Navbar";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Treatment = () => {
  return (
    <div>
      {/* navbar */}
      <NavigationBar> </NavigationBar>

      {/* top image */}
      <div className="top-banner">
        <h3 className="big-txt">Treatment </h3>
        <p className="text-white"> Home / Treatment </p>
      </div>

      {/* treatment cards */}

      <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
        <div class="col ">
          <div class="card h-100 border-0 shadow-lg">
            <img
              className="p-md-5"
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              className="p-md-5"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              className="p-md-5"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              className="p-md-5"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              className="p-md-5"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              className="p-md-5"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              className="p-md-5"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6192/6192088.png"
              className="p-md-5"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title my-3">Fiver</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="p-1 border">
              <Button className="w-100">View More Details</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Treatment;
