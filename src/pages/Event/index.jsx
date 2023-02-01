import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default function Event() {
    const [users, setUsers] = useState([]);

    function getUsers() {
        axios
            .get('https://raidscheduler.online/api/users')
            .then((response) => {
                console.warn(response.data); //eslint-disable-line
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error); //eslint-disable-line
            });
    }

    // drive getUsers() once
    useEffect(() => {
        getUsers();
    }, []); // Empty array to stop refresh

    // Use axios to delete data and run getUsers function to update the list
    const deleteUser = (id) => {
        axios
            .delete(`https://raidscheduler.online/api/user/${id}`)
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