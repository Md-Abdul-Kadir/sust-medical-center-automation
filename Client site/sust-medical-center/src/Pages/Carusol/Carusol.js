import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carusol.css";
import b1 from "../../Images/Banner/Carosol/ca1.jpg";
import b2 from "../../Images/Banner/Carosol/ca2.jpg";
import b3 from "../../Images/Banner/Carosol/ca3.jpg";

const Carusol = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={b2} alt="Second slide" />

          <Carousel.Caption>
            <p>Shahjajal University Medical Center</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carusol;
