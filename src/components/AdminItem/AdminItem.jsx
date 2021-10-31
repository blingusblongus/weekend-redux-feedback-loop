import axios from "axios";
import { TableRow, TableCell, Button } from "@mui/material";
import { bgcolor } from "@mui/system";

function AdminItem({ row, getFeedback }) {
    const handleDelete = () => {
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
        <TableRow sx={row.flagged && {bgcolor: 'red'}}>
            <TableCell align="center">{row.feeling}</TableCell>
            <TableCell align="center">{row.understanding}</TableCell>
            <TableCell align="center">{row.support}</TableCell>
            <TableCell>{row.comments}</TableCell>
            <TableCell>
                <Button
                    onClick={handleFlag}
                    variant="outlined"
                    color="warning">
                    Flag
                </Button>
            </TableCell>
            <TableCell>
                <Button
                    onClick={handleDelete}
                    variant="outlined"
                    color="error">
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default AdminItem;