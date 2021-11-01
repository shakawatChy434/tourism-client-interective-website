import React from 'react';
import Banner from '../Banner/Banner';
import TouristPackeges from '../TouristPackeges/TouristPackeges';
import TouristServices from '../TouristServices/TouristServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristServices></TouristServices>
            <TouristPackeges></TouristPackeges>
        </div>
    );
};

export default Home;