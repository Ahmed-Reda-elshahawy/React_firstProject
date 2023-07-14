import { SiShopify } from "react-icons/si"
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from "react";
import DATA from "../DATA";

export default function Header() {
    return (
        <div className="head">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="brand">
                        <Link className="Brand-link" to="/"><span className="icon"><SiShopify /></span> Store.com</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Link className="home" to="/">Home</Link>
                            <Link className="about" to="/About">About</Link>
                            <Link className="contact" to="/ContactUs">Contact us</Link>
                            <Link className="login" to="/Login">Login</Link>
                            <Link className="register" to="/Register">Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}



