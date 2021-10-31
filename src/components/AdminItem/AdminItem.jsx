import axios from "axios";
import { TableRow, TableCell, IconButton } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';

function AdminItem({ row, getFeedback }) {
    const date = new Date(row.date);
    const flagColor = '#fff2d9';

    const handleDelete = () => {
        if(!confirm('Are you sure you want to delete?')) return;
        axios.delete(`/admin/delete/${row.id}`)
            .then(response => {
                console.log('DELETE success');
                getFeedback();
            }).catch(err => {
                console.log('DELETE err');
            });
    }

    const handleFlag = () => {
        axios.put(`/admin/flag/${row.id}`)
            .then(response => {
                console.log('PUT SUCCESS');
                getFeedback();
            }).catch(err => {
                console.log('DELETE ERR', err);
            })
    }

    return (
        <TableRow sx={row.flagged ? {bgcolor: flagColor} : undefined}>
            <TableCell align="center">{row.feeling}</TableCell>
            <TableCell align="center">{row.understanding}</TableCell>
            <TableCell align="center">{row.support}</TableCell>
            <TableCell>{row.comments}</TableCell>
            <TableCell align="center">
                {/* Quick parse date */}
                {date.toLocaleString('en-US').split(',')[0]}
            </TableCell>
            <TableCell>
                <IconButton 
                aria-label="flag" 
                color="warning"
                onClick={handleFlag}>
                    <FlagIcon/>
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton 
                aria-label="delete" 
                color="error"
                onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default AdminItem;