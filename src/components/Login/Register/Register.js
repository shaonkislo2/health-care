import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const {signInUsingGoogle} =useFirebase();
    return (
        <div>
           <div>
           <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="text" placeholder="Your Name" />
                    <br />
                    <input type="text" placeholder="Your Location" />
                    <br />
                    <input type="text" placeholder="Your Phone No." />
                    <br />
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account?  <Link to="/login">Login</Link></p>
                <div>---------- or -------</div>
               
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google SIgn In</button>
 
           </div>
        </div>
    );
};

export default Register;