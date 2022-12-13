import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

// db
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Event() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/react-crud-php-api-mysql/api/users', inputs).then(function(response){
        // axios.post('https://6397015f86d04c763387a39a.mockapi.io/users', inputs).then(function(response){
            console.log(response.data);
            navigate('/event');
        });
    }

    return (
        <>
        <Container>
        <Row>
            <Col>
            <Calendar />
               
        <div>
            <h1>Schedule a Raid</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Group: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Date: </label>
                            </th>
                            <td> 
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Status: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
            </Col>



        </Row>
        </Container>
        </>
    )
}

export default Event;