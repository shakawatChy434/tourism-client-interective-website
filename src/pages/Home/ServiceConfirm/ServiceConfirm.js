import React from 'react';
import { useParams } from 'react-router';

const ServiceConfirm = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h1> this  is single service :{serviceId} </h1>
        </div>
    );
};

export default ServiceConfirm;