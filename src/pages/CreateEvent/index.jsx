import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

export default function NewEvent() {
    // Allow component to navigate to another page using React Router
    const navigate = useNavigate();

    // State hook to store values
    const [inputs, setInputs] = useState([]);

    // Handle changes in input values
    const handleChange = (event) => {
        // Get the input fields triggers
        const { name } = event.target;
        const { value } = event.target;
        // Update the state hook with new values
        setInputs((values) => ({ ...values, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Send post request to the server. With user input values
        axios
            .post('https://raidscheduler.online/api/users', inputs)
            // Once the request is done, log it and navigate to the another page
            .then((response) => {
                console.log(response.data); //eslint-disable-line
                navigate('/event');
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    {/* <Calendar /> */}
                    <h1>Schedule a Raid</h1>
                    <form onSubmit={handleSubmit}>
                        {' '}
                        {/* eslint-disable jsx-a11y/label-has-associated-control */}
                        <table cellSpacing="10">
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="name">Group:</label>
                                    </td>
                                    <td>
                                        <input
                                            value={inputs.name}
                                            type="text"
                                            name="name"
                                            id="name"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="email">Date:</label>
                                    </td>
                                    <td>
                                        <input
                                            value={inputs.email}
                                            type="text"
                                            name="email"
                                            id="email"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="mobile">Status:</label>
                                    </td>
                                    <td>
                                        <input
                                            value={inputs.mobile}
                                            type="text"
                                            name="mobile"
                                            id="mobile"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align="right">
                                        <Button type="submit">Save</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
