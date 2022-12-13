import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import userEvent from "@testing-library/user-event";

export default function EditEvent() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, );

    function getUser() {
        axios.get(`http://localhost/react-crud-php-api-mysql/api/${id}`).then(function(response) {
        // axios.get(`https://6397015f86d04c763387a39a.mockapi.io/users/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    // Constructor
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/react-crud-php-api-mysql/api/${id}`, inputs).then(function(response){
        // axios.put(`https://6397015f86d04c763387a39a.mockapi.io/users/${id}`, inputs).then(function(response){
            console.log(response.data);
            navigate('/event');
        });
        
    }

    return (
        <div>

            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Group: </label>
                            </th>
                            <td>
                                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Date: </label>
                            </th>
                            <td> 
                                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Status: </label>
                            </th>
                            <td>
                                <input value={inputs.mobile} type="text" name="mobile" onChange={handleChange} />
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
    )
}
