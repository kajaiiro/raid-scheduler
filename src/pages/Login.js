import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container';

function Login() {
    return (
    <Container>
    <Form>

      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mb-3">
        Submit
      </Button>

    </Form>
    
    <Link to="/register"><Button variant="link">Register</Button></Link> 
    </Container>
    )
}

export default Login;