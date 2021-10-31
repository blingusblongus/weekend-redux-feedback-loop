import axios from "axios";
import { TableRow, TableCell, Button } from "@mui/material";

function AdminItem({ row, getFeedback }) {
    const handleClick = () => {
        axios.delete(`/admin/${row.id}`)
            .then(response => {
                console.log('DELETE success');
                getFeedback();
            }).catch(err => {
                console.log('DELETE err');
            });
    }

    return (
        <TableRow>
            <TableCell align="center">{row.feeling}</TableCell>
            <TableCell align="center">{row.understanding}</TableCell>
            <TableCell align="center">{row.support}</TableCell>
            <TableCell>{row.comments}</TableCell>
            <TableCell>
                <Button 
                onClick={handleClick}
                variant="outlined"
                color="error">
                    Delete
                </Button>
                </TableCell>
        </TableRow>
    )
}

export default AdminItem;