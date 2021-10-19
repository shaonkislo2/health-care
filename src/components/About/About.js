import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container">
      <div className="about-section">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image">
              <img className="w-100" src="https://as2.ftcdn.net/v2/jpg/03/22/27/25/500_F_322272505_aLeptvnGIyee3f70SBMTn7G8OpqACmmd.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-right-section text-start p-4">
              <h2 className="mt-4">
                About US{" "}
                
              </h2>
              <h3 className="mt-5">MEDINOVA MEDICAL SERVICES LTD.</h3>
              <p>
              We the MEDINOVA MEDICAL SERVICES LTD. an approved Medical Check-Up Center of the Executive Board of The Health Minister’s Council for G.C.C (Gulf Co-operation Council) States, bearing G.C.C Computer Code No. 05/01/24. We are one of the member medical centre under GAMCA, Dhaka-Bangladesh. We are situated at the prime location of Dhaka city located at HOUSE # 71/A, ROAD # 5/A, DHANMONDI R/A, DHAKA - 1209.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;