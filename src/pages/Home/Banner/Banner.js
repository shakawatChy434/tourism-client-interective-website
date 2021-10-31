import React from 'react';
import './Banner.css'
// import banner from '../../../images/banner5.jpeg';


const Banner = () => {
    return (
        <div id="home" className="bnner-part py-5">
            <div className="banner-details  ">
                <h1 className=" ">Wellcome To The Travel</h1>
                <small className='text-white'>
                    Tourism is travel for pleasure or business; also the theory and practice of touring, <br /> the business of attracting, accommodating, and entertaining tourists, ....</small> <br />
                <button className=" btn-detail py-2 px-3 my-5">Booking Now</button>
            </div>

        </div>
    );
};

export default Banner;