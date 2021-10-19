import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg
      "
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="banner-title">Our commitment</h3>
      <p className="banner-details">To develop and coordinate amongst the member Medical Centres Performing medical check-up of the passengers bound for Gulf States.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://image.freepik.com/free-photo/my-daughter-isn-t-afraid-pay-visit-here_329181-7634.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="banner-title">Our Mission</h3>
      <p className="banner-details">To ensure the medical technical staff and other employees of the member medical centres through workshop, symposium, etc.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://image.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="banner-title">Our Responsibility</h3>
      <p className="banner-details">To encourage the Medical Centres to stand beside the nation during natural calamities like flood, cyclone, drought, earthquake etc;.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;

