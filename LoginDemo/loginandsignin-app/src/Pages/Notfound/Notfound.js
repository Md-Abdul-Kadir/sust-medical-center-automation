import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'
const Notfound = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <br />
            <Link  to="/home">
                <button className="btn btn-primary my-3">Go Home</button>
            </Link>
        </div>
    );
};

export default Notfound;