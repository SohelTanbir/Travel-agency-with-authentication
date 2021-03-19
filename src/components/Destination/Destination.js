import React from 'react';
import { useParams } from 'react-router';
import vehicleInfo from '../FakeDate/FakeData';
import mapImg  from '../../images/Map.png';
import './Destination.css'

const Destination = () => {
    const { id } = useParams();
    const data = vehicleInfo.filter(obj => obj.id === parseInt(id));
    const {title, photo} = data[0];
    const ShowHide = ()=>{
       document.querySelector('.formBox').style.display ='none';
    }
    return (
        <div className="container p-3">
            <div className="row ml-auto">
                <div className="col-md-3">
                        <div className="destinationCard">
                            <div className="formBox">
                                <span>Pick From</span> <br/>
                                <input type="text" value="Thakurgaon"/> <br/>
                                <span>Pick To</span> <br/>
                                <input type="text" value="Dhaka"/> <br/>
                                <button onClick={()=> ShowHide()}>Search</button>
                            </div>

                            <div className="formBox2">
                                <span>Pick From</span> <br/>
                                <input type="text" value="Thakurgaon"/> <br/>
                                <span>Pick To</span> <br/>
                                <input type="text" value="Dhaka"/> <br/>
                                <button onClick={()=> ShowHide()}>Search</button>
                            </div>
                        </div>
                </div>
                <div className="col-md-9">
                    <div className="mapImage">
                        <img src={mapImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;