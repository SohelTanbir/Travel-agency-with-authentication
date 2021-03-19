import React from 'react';
import  './TravelInfo.css'
const TravelInfo = (props) => {
    const {title, photo} = props.data;
    return (
        <div className="travelInfo">
            <div className="row justify-content-around">
                <div className="vehicleImg">
                    <img src={photo} alt="img" />
                </div>||
                <div className="vehicleTitle">{title}</div>||
                <div className="travelPrice">$63</div>
            </div>
        </div>
    );
};

export default TravelInfo;