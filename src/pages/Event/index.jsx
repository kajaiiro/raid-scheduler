import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function Event() {
    // State hook to store values
    const [events, setEvents] = useState([]);

    const url = 'https://raidscheduler.online';

    // Prepare function what makes a GET request, to get list of events
    function getEvents() {
        axios
            .get(`${url}/api/events`)
            .then((response) => {
                console.warn(response.data); //eslint-disable-line
                // Update the state hook with new values
                setEvents(response.data);
            })
            .catch((error) => {
                console.error(error); //eslint-disable-line
            });
    }
    // hook to call function when component is mounted
    useEffect(() => {
        getEvents();
    }, []);

    // Prepare function what makes a DELETE request, to remove used
    const deleteEvent = (id) => {
        axios
            .delete(`${url}/api/event/${id}`)
            .then((response) => {
                console.warn(response.data); //eslint-disable-line
                getEvents();
            })
            .catch((error) => {
                console.error(error); //eslint-disable-line
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h4>
                        Upcoming Raids{' '}
                        <Link to="/event/new">
                            <Button>Add Event</Button>
                        </Link>
                    </h4>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Group</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) => (
                                <tr key={event.index}>
                                    <td>{event.id}</td>
                                    <td>{event.name}</td>
                                    <td>{event.email}</td>
                                    {/* <td>{event.created_at}</td>   */}
                                    <td>{`${event.mobile} / 8`}</td>
                                    <td>
                                        <Link
                                            to={`${event.id}/edit`}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Edit
                                        </Link>
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                deleteEvent(event.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
