import React,{useState} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/Navbar";
import facbookLogo from "../../Images/facebook.png";
import GmailLogo from "../../Images/google.png";
import "../Login/Login.css";
import Axios from 'axios';

const Register = () => {

  const [roleReg, setRoleReg] = useState("patient");
  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => { // sending variables to backend
    Axios.post("http://localhost:3001/register" , {username:usernameReg , password:passwordReg,email:emailReg,role:roleReg}).then((response) => {
      console.log(response);
    });
  };



  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="logBG p-md-5">
        <Container className="p-md-5 mx-auto  row">
          <div className="col-md-6 col-sm-12 p-5 h-100 formDiv marginBottom bg-theme-light shadow-lg">
            <h3 className=" text-theme fw-bold mb-5">Please Sign Up</h3>
            <form className="">
              <input
                type="email"
                className="my-2 p-2 w-100 border-0 rounded-1 shadow"
                placeholder=" Enter Email"
                onChange={(e)=>{setEmailReg(e.target.value);}}
              />{" "}
              <br />
              <input
                background-color="primary"
                type="text"
                className="themeForm my-2 p-2 w-100 border-0 rounded-1 shadow "
                placeholder=" Enter user name"
                onChange={(e)=>{setUsernameReg(e.target.value);}}
              />{" "}
              <br />
              <input
                type="password"
                className="my-2 p-2 w-100 border-0 rounded-1 shadow"
                placeholder=" Enter Password"
                onChange={(e)=>{setPasswordReg(e.target.value);}}
              />
              <br />
              <input
                type="password"
                className="my-2 mb-4 p-2 w-100 border-0 rounded-1 shadow"
                placeholder=" Confirm Password"
              />
              <br />
              <select className="custom-select"
        value={roleReg}
        onChange={(e) => {
          const selectedRole = e.target.value;
          setRoleReg(selectedRole);
        }}
      >
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        
      </select>
      
      <br />
              
            <button onClick={register}  className="btn themeColor text-light px-5 py-2">Register</button>
            </form>
            <p className="my-4">
              Already register?<Link to="/login"> Login</Link>
            </p>
            <button className="btn-light border-0 rounded-3 w-75 d-flex mx-auto mb-2">
              <div className="d-flex mx-auto py-2">
                <img
                  className="pe-2"
                  src={GmailLogo}
                  alt="Gmail logo"
                  height="22px"
                />
                Google Sign up
              </div>
            </button>

            <button className="btn-primary border-0 rounded-3 text-light w-75 mx-auto d-flex">
              <div className="d-flex mx-auto py-2">
                <img
                  className="pe-2"
                  src={facbookLogo}
                  alt="Facebook logo"
                  height="22px"
                />
                Facebook Sign up
              </div>
            </button>
          </div>
        </Container>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Register;
