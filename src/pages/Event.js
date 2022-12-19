import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

// db
import axios from "axios"
import { useEffect, useState } from "react";

function Event() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/react-crud-php-api-mysql/api/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/react-crud-php-api-mysql/api/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <Container>
        <Row>

            <Col>
            <h4>
            Upcoming Raids {' '}
            <Link to="/event/new"><Button>Add Event</Button></Link>
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
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            {/* <td>{user.email}</td> */}
                            <td>{user.created_at}</td>
                            <td>{user.mobile} / 8 </td>
                            <td>
                                <Link to={`${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </Table>
            </Col>

        </Row>
        </Container>
    )
}

export default Event;