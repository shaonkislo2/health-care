import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5 footer">
            <div className="row">
              <div className="col-md-4  ">   
                  <h2 className="mt-5">About Us</h2>
                   <div className="link-style">
                   <span><Link to="/home">Home</Link></span> <br />
                   <span><Link to="/services">Services</Link></span> <br />
                   <span><Link to="/doctors">Doctors</Link></span> <br />
                   <span><Link to="/appointment">Appointment</Link></span>
                   </div>                                 
              </div>
              
              <div className="col-md-4">             
                  <h3 className="mt-5">Follow US</h3>                  
                  <h4><i class="fab fa-facebook-square"></i></h4>
                  <h4><i class="fab fa-twitter"></i></h4>
                  <h4><i class="fab fa-instagram-square"></i></h4>              
              </div>

              <div className="col-md-4">
                <div className="fourth-part">
                  <h3 className="mt-5">Contact Us</h3>
                  <small >Office:  Road #  5/A
                  Dhanmondi R/A,Dhaka. </small>
                  <br />
                  <small> <i class="fas fa-phone-square-alt"></i> Phone: +8802-58610661-5</small>
                  <br />
                  <small><i class="fas fa-envelope"></i> Mail: medinova@gmail.com</small>
                </div>
              </div>
            </div>
            <hr />
            <div className="botton text-center">
              <small>© 2021  MEDINOVA MEDICAL SERVICES LTD All Rights Reserved.</small>
            </div>
          
        </div>
      );
};

export default Footer;