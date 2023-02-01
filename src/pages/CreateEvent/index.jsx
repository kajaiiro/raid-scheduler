import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
                    <Calendar />
                    <h1>Schedule a Raid</h1>
                    <form onSubmit={handleSubmit}>
                        <table cellSpacing="10">
                            <tbody>
                                <tr>
                                    <th>Group:</th>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Date:</th>
                                    <td>
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Status:</th>
                                    <td>
                                        <input
                                            type="text"
                                            name="mobile"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align="right">
                                        <Button>Save</Button>
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
