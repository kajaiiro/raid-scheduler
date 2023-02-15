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
    const [users, setUsers] = useState([]);

    const url = 'https://raidscheduler.online';

    // Prepare function what makes a GET request, to get list of users
    function getUsers() {
        axios
            .get(`${url}/api/users`)
            .then((response) => {
                console.warn(response.data); //eslint-disable-line
                // Update the state hook with new values
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error); //eslint-disable-line
            });
    }
    // hook to call function when component is mounted
    useEffect(() => {
        getUsers();
    }, []);

    // Prepare function what makes a DELETE request, to remove used
    const deleteUser = (id) => {
        axios
            .delete(`${url}/api/user/${id}`)
            .then((response) => {
                console.warn(response.data); //eslint-disable-line
                getUsers();
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
                            {users.map((user) => (
                                <tr key={user.index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    {/* <td>{user.email}</td> */}
                                    <td>{user.created_at}</td>
                                    <td>{`${user.mobile} / 8`}</td>
                                    <td>
                                        <Link
                                            to={`${user.id}/edit`}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Edit
                                        </Link>
                                        <Button
                                            variant="danger"
                                            onClick={() => deleteUser(user.id)}
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
