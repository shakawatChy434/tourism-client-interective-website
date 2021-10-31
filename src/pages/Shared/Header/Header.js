import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { GiHospital } from "react-icons/gi";


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><GiHospital className="me-2" /> Tourista</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto me-2">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#package">Package</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={HashLink} to="/login">Log-In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;