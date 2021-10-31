import React from 'react';
import { FcAlarmClock } from "react-icons/fc";
import { MdRateReview } from "react-icons/md";

const TouristPackege = (props) => {
    const { name, id, amount, img, discription, reviews } = props.user;

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4  mt-4 content-details ">
            <div className="">
                <div className="tour-details ms-auto ml-auto pb-3">
                    <img src={img} alt="" />
                    <div className="details d-flex mt-3 pt-2  ps-1">
                        <div className="tour-info d-flex">
                            <div className="me-5"><h4>{name}</h4></div>
                            <div className="ms-5"><p> ${amount} </p></div>
                        </div>
                    </div>
                    <div>
                        <p><FcAlarmClock /> 5 Days - 4 Night</p>
                    </div>
                    <div>{discription}</div>
                    <div><p className="me-5 mt-2"><MdRateReview /> {reviews} Reviews</p></div>
                    <div className="btn-details mt-4 ">
                        <button className="btn-details rounded-3 text-white  bg-danger py-2 px-4">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristPackege;