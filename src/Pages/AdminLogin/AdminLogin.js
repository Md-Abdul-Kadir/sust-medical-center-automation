import React,{useState,useContext, createContext} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/Navbar";
import facbookLogo from "../../Images/facebook.png";
import GmailLogo from "../../Images/google.png";
import "./AdminLogin.css";
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext,Auth } from "../../helpers/AuthContext";
import {UserContext} from "../UserContext";




const Login = () => {

  function handleSubmit(event) {
    event.preventDefault();
  }

  const navigate = useHistory();
  //const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const [authState,setAuthState]= useContext(AuthContext);
  


  const login = () => {
    //const data = { username: username, password: password };
    Axios.post("http://localhost:3001/adminlogin", { email: email, password: password}).then((response) => {
      //console.log("logged in");
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        // setAuthState(true);
        //console.log(authState);
        navigate.push("/adminprofile");
      }
    });
  };


  return (
    <div>
      
      <NavigationBar></NavigationBar>
      <div className="logBG py-md-5">
        <Container className="p-md-5 mx-auto row">
          <div className="col-md-6 col-sm-12 p-5 h-100 formDiv marginBottom bg-theme-light shadow-lg">
            <h3 className=" text-theme fw-bold mb-5">Log in as an ADMIN</h3>
            <form onSubmit={handleSubmit} className="">
              <input
                type="email"
                className="my-2 p-2 w-100 border-0 rounded-1 shadow"
                placeholder=" Enter Email"
                onChange={(e)=>{setEmail(e.target.value);}}
              />{" "}
              <br />
              <input
                type="password"
                className="mt-2 mb-4 p-2 w-100 border-0 rounded-1 shadow"
                placeholder=" Enter Password"
                onChange={(e)=>{setPassword(e.target.value);}}
              />
              <br />
              
      
      <br />
    
              <button onClick={login}
                className="btn themeColor text-light px-5 py-2" >Login</button>

        
            </form>
            
            
            
          </div>
        </Container>
      </div>
      <Footer></Footer>
    
      
    </div>
  );
};

export default Login;
