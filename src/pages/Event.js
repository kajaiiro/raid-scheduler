import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Event() {
    return (
        <>
        <Container>
        <Row>
            <Col>
                <h2>Calendar</h2>
                <Link to="/event/new"><Button>Add Event</Button></Link>
            </Col>

            <Col>
                <Calendar />
            </Col>

            <Col>{/* Create this as component */}
                <h4>Upcoming Raids</h4>
                <Button variant="secondary" disabled>Export</Button>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Taitotalo</td>
                        <td>December 24th 2022</td>
                        <td>8/8</td>
                    </tr>
                    <tr>
                        <td>Laniakea</td>
                        <td>January 1st 2023</td>
                        <td>6/8</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>

        </Row>
        </Container>
        </>
    )
}

export default Event;