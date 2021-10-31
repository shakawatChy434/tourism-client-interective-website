import React from 'react';
import './TouristServices.css'
import { useEffect } from 'react';
import { useState } from 'react';
import TouristService from '../TouristService/TouristService';

const TouristServices = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('./touriestsData.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div id="service" className="container  mt-5 mb-5 p-5 ">
            <p className='text-danger'>Popular Destinations</p>
            <h2 className='text-primary' >Travel Most Popular Place <br /> In The World</h2>
            <div className="row">
                {
                    users.map(user => <TouristService
                        key={user.id}
                        user={user}
                    ></TouristService>)
                }
            </div>
        </div>
    );
};

export default TouristServices;