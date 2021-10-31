import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { GiHospital } from "react-icons/gi";
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
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
                            {user?.email ? (
                                <Nav.Link onClick={logOut} as={HashLink} to="/login">LogOut</Nav.Link>
                            ) : (
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                            )
                            }
                        </Nav>
                        <Navbar.Text>
                            User Name:  <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;