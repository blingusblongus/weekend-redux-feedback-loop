import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import './Review.css';

// emoji reactions
import reactions from "../../modules/reactions";

function Review(props) {
    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        axios.post('/user', feedback)
            .then(response => {
                console.log('POST SUCCESS');

                //On success, clear feedbackReducer
                dispatch({
                    type: 'CLEAR_FEEDBACK'
                })

                // and navigate to success page
                history.push('/success');
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <div id="table-container">
                <Paper elevation={3}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ width: "33.3%" }}>
                                    Feeling:</TableCell>
                                <TableCell sx={{ width: "33.3%" }} align="center">
                                    {feedback.feeling}</TableCell>
                                <TableCell align='center'>
                                    {reactions[feedback.feeling - 1]}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Understanding:</TableCell>
                                <TableCell align="center">
                                    {feedback.understanding}</TableCell>
                                <TableCell align='center'>
                                    {reactions[feedback.understanding - 1]}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Support:</TableCell>
                                <TableCell align="center">
                                    {feedback.support}</TableCell>
                                <TableCell align='center'>
                                    {reactions[feedback.support - 1]}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Comments:</TableCell>
                                <TableCell colSpan={2}>
                                    {feedback.comments}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <div id="bottom-buttons">
                    <Button variant="contained"
                        onClick={() => history.push('/comments')}>
                        Back</Button>
                    <Button
                        variant="contained"
                        onClick={handleClick}>
                        SUBMIT</Button>
                </div>
            </div>
        </div>

    );
}

export default Review;