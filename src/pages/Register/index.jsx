import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container';

import { useState } from "react"
import axios from "react"
import { useNavigate } from "react-router-dom"

function Register() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <Container>

<Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control type="username" placeholder="Enter username" onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Write password again</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChange} />
    </Form.Group>

    <Button variant="primary" type="submit" className="mb-3">
    Submit
    </Button>

</Form>
        </Container>
    )
}

export default Register;