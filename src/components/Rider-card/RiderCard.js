import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import  './RiderCard.css'


const RiderCard = (props) => {
    const history =  useHistory();
    const {title, photo, id} = props.vehicleInfo;
    const handleVehicle = id =>{
        const url = `destination/${id}`;
        history.push(url)
    }
    return (
            <div className="RiderContainer">
                <div className="travel-card" onClick={()=> handleVehicle(id)}>
                    <img src={photo} alt="vehicle"/>
                    <h3>{title}</h3>
                </div>
        </div>
    );
};

export default RiderCard;