import React from 'react';
import Container from 'react-bootstrap/Container';

// Simple about page
// Link to favicon
export default function About() {
    return (
        <Container className="text-center">
            <h1>About</h1>
            <p>This website is student project.</p>

            <a
                href="https://www.flaticon.com/free-icons/gaming"
                title="gaming icons"
            >
                Gaming icons created by Freepik - Flaticon
            </a>
        </Container>
    );
}
