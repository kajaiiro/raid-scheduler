import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1>Organize your team</h1>
                <p className="lead">
                    Raid scheduler is react app built to help time manage your
                    team
                </p>

                <Link to="/event">
                    <Button variant="secondary">Test it out</Button>
                </Link>
            </Row>
        </Container>
    );
}
