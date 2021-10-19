import React from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from ;
    const handleGoogleLogin = () => {
       signInUsingGoogle()
       .then(result =>{
        history.push(redirect_uri)
       })
    }
    return (
        <div >    
          <h2>Please Login</h2>
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
          <p>New Patient ? <Link to="register">Create Account</Link> </p>

          <div>-------------- or ---------</div>
           <br />
          <button onClick={handleGoogleLogin}  className="btn btn-warning">Google Sign In</button>  
        </div>
    );
};

export default Login;