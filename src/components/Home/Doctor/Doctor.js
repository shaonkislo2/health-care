import React from 'react';


const Doctor = ({doctor}) => {
    const {name, img, description}=doctor;
    return (
        <div className="doctor p-3">
           <h1 className="fs-3">{name} </h1>
            <img className="w-100"  src={img} alt="" />
            
            <h4 className="p-3">Specialist : {description} </h4> 
        </div>
    );
};
export default Doctor;