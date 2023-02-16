import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditEvent() {
    // Allow component to navigate to another page using React Router
    const navigate = useNavigate();

    // State hook to store values
    const [inputs, setInputs] = useState([]);

    // Extract parameter from current route
    const { id } = useParams();

    // Prepare function what makes a GET request, to retrieve event
    function getEvent() {
        axios
            .get(`https://raidscheduler.online/api/event/${id}`)
            .then((response) => {
                console.table(response.data); //eslint-disable-line
                setInputs(response.data);
            });
    }

    // hook to call function when component is mounted
    useEffect(() => {
        getEvent();
    }, []);

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

        axios
            .put(`https://raidscheduler.online/api/event/${id}`, inputs)
            // Once the request is done, log it and navigate to the another page
            .then((response) => {
                console.log(response.data); //eslint-disable-line
                navigate('/event');
            });
    };

    return (
        <Container>
            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>Group:</th>
                            <td>
                                <input
                                    value={inputs.group}
                                    type="text"
                                    name="group"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Date:</th>
                            <td>
                                <input
                                    value={inputs.date}
                                    type="text"
                                    name="date"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Status:</th>
                            <td>
                                <input
                                    value={inputs.status}
                                    type="text"
                                    name="status"
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
        </Container>
    );
}
