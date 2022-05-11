import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/Navbar';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1 className="my-5 py-5">Welcom to Home <br />SUST Medical Center</h1>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;