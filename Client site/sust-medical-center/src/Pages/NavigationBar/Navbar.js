import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import logo from "../../Images/Banner/sustlogo/logo.png";
import callicon from "../../Images/icons/phone-icons.png";
import amboIcon from "../../Images/icons/ambulance-lights.png";
import Button from 'react-bootstrap/Button';


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

const NavigationBar = () => {
  return (
    <>
      {/* <span className="text-light">{ user.displayName}</span>
                    <button onClick={signInUsingGoogle} className="btn-outline-secondary px-4 py-2 rounded"> LOG IN</button> */}

      <div className="sticky-top bg-white">
        <div className="py-1 mx-auto container bg-white row px-0">
          <div className="d-flex col-md-5">
            <p className="pt-2">
              <img src={logo} height="75px" alt="this is a logo of sust" />
            </p>
            <div className="px-3 my-auto ms-0 text-start">
              <h3 className="fw-bold text-black text-align-left my-1">
                SUST MEDICAL CENTER
              </h3>
              <p className="text-secondary my-0">Care That Never Quits</p>
            </div>
          </div>
          <div className="col-md-3 my-auto d-flex">
            <div>
              <img
                src={callicon}
                alt="This is a call icon"
                height="40px"
                className="px-3 pt-1"
              />
            </div>

            <div className="text-start">
              <h6 className="fw-bold">Emergency Helpline</h6>
              <p>01739-36852</p>
            </div>
          </div>
          <div className="col-md-4 my-auto d-flex">
            <div>
              <img
                src={amboIcon}
                alt="This is a call icon"
                height="50px"
                className="px-3"
              />
            </div>
            <div>
              <h6 className="text-start fw-bold">Ambulance Service</h6>
              <p className="text-start">0176464646</p>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg text-light nav_color sticky-top navitem">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <Nav class="navbar-nav text-light me-auto">
                <Nav.Link className="text-light pe-3" as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link className="text-light px-3" as={Link} to="/treatment">
                  Treatment
                </Nav.Link>
                <Nav.Link
                  className="text-light px-2"
                  as={Link}
                  to="/appointment"
                >
                  Appointment
                </Nav.Link>
                <Nav.Link className="text-light px-3" as={Link} to="/clearance">
                  Clearance
                </Nav.Link>
                <Nav.Link className="text-light px-3" as={Link} to="/covidcare">
                  Covid-Care
                </Nav.Link>
                <Nav.Link className="text-light px-3" as={Link} to="/aboutus">
                  About Us
                </Nav.Link>
                <Nav.Link className="text-light ps-3 " as={Link} to="/contactus">
                  Contact Us
                </Nav.Link>

              
              </Nav>
              <Nav className="my-auto">
              <Nav.Link className="text-light px-3" as={Link} to="/login">
                LogIn
                </Nav.Link>
            
              <Button variant="outline-light my-0 py-0">
              <Nav.Link
                  className="text-light"
                  as={Link}
                  to="/register"
                >
                  Register
                </Nav.Link>
              </Button>
              <Nav.Link className="text-light px-3" as={Link} to="/profile">
                Profile
              </Nav.Link>
              </Nav>
            </div>

            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Profile" src="/broken-image.jpg" />
            </StyledBadge>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
