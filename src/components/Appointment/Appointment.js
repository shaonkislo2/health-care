import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Appointment = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
           <h2>If You want to Appointment for Doctor , PLease Login </h2>
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
          <p>New Patient ? <Link to="register">Create Account</Link> </p>

         <div>-------------- or -----------</div>
         
          <button onClick={signInUsingGoogle}  className="btn btn-warning">Google Sign In</button>
            
        </div>
    );
};

export default Appointment;