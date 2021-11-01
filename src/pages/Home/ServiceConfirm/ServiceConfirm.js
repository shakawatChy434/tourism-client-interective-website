/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const ServiceConfirm = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { name, img, amount } = service;
    const { user } = useAuth();

    const { nameRef } = useRef();
    const { emailRef } = useRef();
    const { serviceNameRef } = useRef();
    const { dateRef } = useRef();
    const { numberRef } = useRef();



    useEffect(() => {
        const url = `https://mysterious-plains-45538.herokuapp.com/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const handleSubmit = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const serviceName = serviceNameRef.current.value;
        const date = dateRef.current.value;
        const number = numberRef.current.value;

        const addNewService = { name, email, serviceName, date, number };

        fetch(("https://mysterious-plains-45538.herokuapp.com/orders"), {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addNewService)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booked Successfully');
                    e.target.reset();
                }
            });
        e.preventDefault();
    }

    return (
        <>
            <Row>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Name</label> <br />
                        <input defaultValue={user.displayName} ref={nameRef} /> <br />
                        <label htmlFor="">Email</label> <br />
                        <input defaultValue={user.email} ref={emailRef} /> <br />
                        <label htmlFor="">Service Name</label> <br />
                        <input defaultValue={name} ref={serviceNameRef} /><br />
                        <label htmlFor="">Date</label><br />
                        <input type="date" defaultValue="" ref={dateRef} /><br />
                        <label htmlFor="">Number</label><br />
                        <input defaultValue="" ref={numberRef} placeholder="phone number" /><br /> <br />
                        <input type="submit" value="Place Order" /><br />
                    </form>
                </Col>
                <Col>
                    <h2>{name} </h2>
                    <img src={img} alt="img-couldn't found" />
                </Col>
            </Row>
        </>
    );
};

export default ServiceConfirm;