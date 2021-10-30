import axios from "axios";
import { useEffect, useState } from "react";
import AdminItem from "../AdminItem/AdminItem";

function Admin(props) {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios.get('/admin')
            .then(response => {
                console.log('GET SUCCESS');
                setFeedback(response.data);
            }).catch(
                console.log('Admin GET ERR')
            );
    }

    console.log('feedback', feedback);

    return (
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {feedback.map(row => {
                    return <AdminItem row={row}/>
                })}
            </tbody>
        </table>
    )
}

export default Admin;