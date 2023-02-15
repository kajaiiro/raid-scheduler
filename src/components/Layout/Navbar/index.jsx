import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

// Navigation, brand link on left, Calendar and Log in separated by space. Left and right
export default function Navigation() {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand>
                    <Link to="/" className="navbar-header">
                        Raid Scheduler
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/event">Calendar</Link>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Link to="/login">Log In</Link>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}
