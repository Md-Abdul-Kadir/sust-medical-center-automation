import React from 'react';
import Carusol from '../Carusol/Carusol';
import Footer from '../Footer/Footer';
import Cardshome from '../HomeCompo/Cardshome';
import NavigationBar from '../NavigationBar/Navbar';


const Home = () => {
    return (
        <div>
            
            <NavigationBar></NavigationBar>
            <Carusol></Carusol>
            <Cardshome></Cardshome>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;