import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Button, TextField, Rating } from "@mui/material";
import './Form.css';

function Form({ formSection }) {
    // Grab existing data from reducer
    const formData = useSelector(store => store.feedbackReducer);

    // If the relevant data is in the store, set the input to that value
    const [input, setInput] = useState(formData[formSection] || '');

    const dispatch = useDispatch();
    const history = useHistory();
    let prompt, inputType, pgIndex, inputField;
    const navList = ['/', '/understanding', '/support', '/comments', '/review'];
    const reactions = [
        '¯\\_(ತ_ʖತ)_/¯',
        '(o_O) ?',
        '(´･_･`)',
        '(*^‿^*)',
        '°˖✧◝(⁰▿⁰)◜✧˖°'
    ]
    // Select form content
    switch (formSection) {
        case 'feeling':
            prompt = "How are you feeling today?";
            inputType = 'number';
            pgIndex = 0;
            break;
        case 'understanding':
            prompt = "How well are you understanding the content?";
            inputType = 'number';
            pgIndex = 1;
            break;
        case 'support':
            prompt = "How well are you being supported?";
            inputType = 'number';
            pgIndex = 2;
            break;
        case 'comments':
            prompt = "Any comments you want to leave?";
            inputType = 'text';
            pgIndex = 3;
            break;
        default:
            break;
    }

    // on Submit, send data to redux
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'SUBMIT_SECTION',
            payload: {
                // reducer adds {[formSection]: value}
                formSection: formSection,
                value: input
            }
        });

        //Navigate to the next page in the navList
        history.push(navList[pgIndex + 1]);
    }

    const handleBack = () => {
        history.push(navList[pgIndex - 1]);
    }

    // assign inputField to appropriate component
    if (inputType === "number") {
        inputField = (
            <div>
                <div id="reaction-container">
                    {reactions[input - 1]}
                </div>
                <Rating type={inputType}
                    onChange={(e) => setInput(e.target.value)}
                    value={parseInt(input)}
                    min={1}
                    max={5}
                ></Rating>
            </div>
        )
    } else {
        inputField = (
            <div id="comment-container">
                <TextField
                    multiline
                    rows={4}
                    size="small"
                    margin="dense"
                    fullWidth
                ></TextField>
            </div>
        )
    }

    return (
        <div>
            <h2>{prompt}</h2>
            <form onSubmit={handleSubmit}>
                {inputField}
                <div id="next-container">
                    <Button variant="contained" type="submit">NEXT</Button>
                </div>
            </form>
            <hr />
            <div id="back-btn-container">
                {pgIndex > 0 && <Button variant="contained" onClick={handleBack}>Back</Button>}
            </div>
        </div>
    );
}

export default Form;