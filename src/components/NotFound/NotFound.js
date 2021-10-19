import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
           <img style={{width:'100%'}} src="https://image.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg" alt="" />
           
           <Link to="/"> <button className="btn btn-warning">Go BAck</button></Link>
        </div>
    );
};

export default NotFound;