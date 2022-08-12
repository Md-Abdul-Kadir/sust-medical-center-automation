import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'
import notfoundimg from '../../Images/2.jpg'
const Notfound = () => {
    return (
        <div>
            <img className="notfound" src={notfoundimg} alt="" />
            <br />
            <Link  to="/home">
                <button className="btn btn-primary my-3">Go Home</button>
            </Link>
        </div>
    );
};

export default Notfound;