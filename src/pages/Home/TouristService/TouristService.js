import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import './TouristService.css'

const TouristService = (props) => {
    const { name, id, amount, img } = props.user;

    return (

        <div className="col-12 col-sm-12 col-md-6 col-lg-4  mt-4 content-details">
            <div className="">
                <div className="tour-details ms-auto ml-auto">
                    <img src={img} alt="" />
                    <div className="details d-flex mt-3 pt-2  ps-1">
                        <div className="tour-info">
                            <h4>{name}</h4>
                            <p>From ${amount} </p>
                        </div>
                        <div className="btn-details ms-4 mt-3">
                            <button className="btn-details ms-5 bg-white"><FaArrowCircleRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristService;