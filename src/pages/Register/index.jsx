import axios from 'axios';
import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const { name } = event.target;
        const { value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost/api/user/save', inputs)
            .then((response) => {
                console.log(response.data); //eslint-disable-line
                navigate('/');
            });
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Write password again</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mb-3">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
