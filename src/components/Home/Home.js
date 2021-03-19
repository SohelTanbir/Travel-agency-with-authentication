import React from 'react';
import './Home.css';
import RiderCard from '../Rider-card/RiderCard';
import Data from '../FakeDate/FakeData'

const Home = () => {
    return (
        <div className="homeBanner">
            {
                Data.map( vehicle => <RiderCard vehicleInfo={vehicle}/>)
            }
        </div>
    );
};

export default Home;