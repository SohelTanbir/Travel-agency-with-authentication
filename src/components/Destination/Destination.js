import React from 'react';
import { useParams } from 'react-router';
import vehicleInfo from '../FakeDate/FakeData';
import mapImg  from '../../images/Map.png';
import './Destination.css'
import TravelInfo from '../TravelInfo/TravelInfo';

const Destination = () => {
    const { id } = useParams();
    const data = vehicleInfo.filter(obj => obj.id === parseInt(id));
    const ShowHide = ()=>{
       document.querySelector('.formBox').style.display ='none';
       document.querySelector('.formBox2').style.display ='block';
    }
    return (
        <div className="container p-3">
            <div className="row ml-auto">
                <div className="col-md-4">
                        <div className="destinationCard">
                            <div className="formBox">
                                <span>Pick From</span> <br/>
                                <input type="text" value="Thakurgaon"/> <br/>
                                <span>Pick To</span> <br/>
                                <input type="text" value="Dhaka"/> <br/>
                                <input type="date" /> <br/>
                                <button onClick={()=> ShowHide()}>Search</button>
                            </div>

                            <div className="formBox2">
                                <div className="destinationInfo">
                                    <span>Thakurgaon </span> <br/>
                                    <small>To</small><br/>
                                    <span>Dhaka</span>
                                </div>
                                    <TravelInfo data={data[0]}/>
                                    <TravelInfo data={data[0]}/>
                                    <TravelInfo data={data[0]}/>
                            </div>
                        </div>
                </div>
                <div className="col-md-8">
                    <div className="mapImage">
                        <img src={mapImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;