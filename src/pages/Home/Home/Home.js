import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import TouristPackeges from '../TouristPackeges/TouristPackeges';
import TouristServices from '../TouristServices/TouristServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristServices></TouristServices>
            <TouristPackeges></TouristPackeges>
            <Footer></Footer>

        </div>
    );
};

export default Home;