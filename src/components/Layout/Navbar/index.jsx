import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Raid-scheduler</Link>
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
            </Container>
        </Navbar>
    );
}
