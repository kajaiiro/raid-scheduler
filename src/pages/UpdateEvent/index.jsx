import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function EditEvent() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const { id } = useParams();

    function getUser() {
        axios
            .get(`https://raidscheduler.online/api/user/${id}`)
            .then((response) => {
                console.table(response.data); //eslint-disable-line
                setInputs(response.data);
            });
    }

    useEffect(() => {
        getUser();
    }, []);

    const handleChange = (event) => {
        const { name } = event.target;
        const { value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .put(`https://raidscheduler.online/api/user/${id}`, inputs)
            .then((response) => {
                console.log(response.data); //eslint-disable-line
                navigate('/event');
            });
    };

    return (
        <div>
            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>Group:</th>
                            <td>
                                <input
                                    value={inputs.name}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Date:</th>
                            <td>
                                <input
                                    value={inputs.email}
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Status:</th>
                            <td>
                                <input
                                    value={inputs.mobile}
                                    type="text"
                                    name="mobile"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <Button>Save</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
