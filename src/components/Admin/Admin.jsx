import axios from "axios";
import { useEffect, useState } from "react";
import AdminItem from "../AdminItem/AdminItem";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Container } from "@mui/material";
import { Paper } from "@mui/material";

function Admin(props) {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedback();
        console.log('I fire once');
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
        <Container>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ width: '15%' }}>Feeling</TableCell>
                            <TableCell align="center" sx={{ width: '15%' }}>Understanding</TableCell>
                            <TableCell align="center" sx={{ width: '15%' }}>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" sx={{ width: '10%' }}>Flag</TableCell>
                            <TableCell align="center" sx={{ width: '10%' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedback.map(row => {
                            return <AdminItem key={row.id} row={row}
                                getFeedback={getFeedback} />
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    )
}

export default Admin;