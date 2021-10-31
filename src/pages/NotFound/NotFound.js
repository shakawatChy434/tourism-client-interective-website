import React from 'react';
import './NotFound.css'
import notFoundImg from '../../images/404-Not-Found-SVG.png'

const NotFound = () => {
    return (
        <div className="notFound-img">
            <img src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;