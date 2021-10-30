import axios from "axios";
import { useEffect, useState } from "react";

function Admin(props) {
    const [feedback, setFeedback] = useState('');

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
                    return (
                        <tr key={row.id}>
                            <td>{row.feeling}</td>
                            <td>{row.understanding}</td>
                            <td>{row.support}</td>
                            <td>{row.comments}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Admin;