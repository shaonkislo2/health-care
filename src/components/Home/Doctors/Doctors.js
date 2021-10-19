import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctor.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() =>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data =>setDoctors(data))
    },[])
    return (
        <div id="doctors">
            <h2 className="text-primary my-5">Our Doctors </h2>
           
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
         
        </div>
    );
};

export default Doctors;


