import React from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/Navbar';
import './Login.css'

const Login = () => {

   
    return (
        <div className="logBG">
            <NavigationBar></NavigationBar>
            
            <Container className="p-md-5 mx-auto mex row">
                <div className="col-md-6 col-sm-12 p-5 h-100 formDiv marginBottom bg-theme shadow-lg">
                <h3 className=" text-theme fw-bold mb-5">Please Log in</h3>  
                <form className="">
                <input type="email" className="my-2 p-2 w-100 border-0 rounded-1 shadow" placeholder=" Enter Email" /> <br />
                <input type="password" className="mt-2 mb-4 p-2 w-100 border-0 rounded-1 shadow" placeholder=" Enter Password" /><br />
                <input type="submit" className="btn themeColor text-light px-5 py-2" value="Login" />
               </form>
                    <p className="my-4">New to SUST Medical Center?<Link to="/register"> Register</Link></p>
                    <button className="btn-danger text-light px-5 border-0 rounded-3 py-2 mb-2 w-50 ">Google Sign In</button>
                    <br />
                    <button className="btn-primary border-0 rounded-3 text-light px-5 py-2 w-50 ">Facebook Sign In</button>
            </div>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;