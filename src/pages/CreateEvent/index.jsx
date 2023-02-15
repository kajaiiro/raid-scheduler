import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

export default function NewEvent() {
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
            .post('https://raidscheduler.online/api/users', inputs)
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
