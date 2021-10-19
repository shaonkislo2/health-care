import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const {serviceId} = useParams();
    const [book, setBook] = useState({});

    useEffect(() =>{
        
        fetch(`services.json/${serviceId}`)
        .then(res => res.json())
        .then(data => setBook(data))
    },[serviceId])
    
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>If are You Booking for - {serviceId} , PLease Login </h2>
            <br />
          <form onSubmit="">
              <input type="email" placeholder="Your Email" />
              <br />
              <br />
              <input type="password" placeholder="Your Password" />
              <br />
              <br />
              <input type="type" value="submit" />
          </form>
          <br />     
          <br />
          <button onClick={signInUsingGoogle}  className="btn btn-warning">Google Sign In</button>          
            
        </div>
    );
};

export default Booking;