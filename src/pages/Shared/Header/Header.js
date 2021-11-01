import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { GiHospital } from "react-icons/gi";
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';


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
                            <Nav.Link as={HashLink} to="/home#package">Packegs</Nav.Link>
                            {user?.email ?
                                <div className="d-flex">
                                    <Nav.Link className="ms-4" as={Link} to="/myOrder">My Order</Nav.Link>
                                    <Nav.Link className="ms-4" as={Link} to="/allmanageOrder">All Manage Order</Nav.Link>
                                    <Nav.Link className="ms-4" as={Link} to="/addService">Add Service</Nav.Link>
                                    < Nav.Link className="ms-4" onClick={logOut} as={HashLink} to="/login">LogOut</Nav.Link>
                                </div>
                                :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
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