import axios from "axios";
import { useEffect, useState } from "react";
import AdminItem from "../AdminItem/AdminItem";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from "@mui/material";
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

    return (
        <Container>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ width: '7%' }}>Feeling</TableCell>
                            <TableCell align="center" sx={{ width: '7%' }}>Understanding</TableCell>
                            <TableCell align="center" sx={{ width: '7%' }}>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" sx={{ width: '7%' }}>Flag</TableCell>
                            <TableCell align="center" sx={{ width: '7%' }}>Delete</TableCell>
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