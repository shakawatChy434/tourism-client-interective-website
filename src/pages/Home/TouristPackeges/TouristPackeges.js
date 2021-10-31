import React, { useEffect, useState } from 'react';
import TouristPackege from '../TouristPackege/TouristPackege';

const TouristPackeges = () => {
    const [users, setuser] = useState([]);

    useEffect(() => {
        fetch('./touriestPakegs.json')
            .then(res => res.json())
            .then(data => setuser(data))
    }, [])
    return (
        < div id="package" className="container  mt-5 mb-5 p-5 " >
            <p className="text-danger">Popular Tour Package</p>
            <h2 className='text-primary' >The Best Of Our All<br /> Tour Packages</h2>
            <div className="row">
                {
                    users.map(user => <TouristPackege
                        key={user.id}
                        user={user}
                    ></TouristPackege>)
                }
            </div>
        </div >
    );
};

export default TouristPackeges;