import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img,description}=service;
    return (
        <div className="service  p-3">
           <h1 className="fs-3 my-3">{name} </h1>
           <img className="w-100" src={img} alt="" />
           <p className="px-3 mt-3">{description}</p>
           <Link to={`/booking/${name}`}>
            <button className="btn-style">Book {name} </button>
            </Link>
        </div>
    );
};

export default Service;