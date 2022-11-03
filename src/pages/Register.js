import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Register() {
    return (
        <>

<Form>

    <Form.Group className="mb-3">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control type="username" placeholder="Enter username" />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Write password again</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary" type="submit" className="mb-3">
    Submit
    </Button>

</Form>
        </>
    )
}

export default Register;