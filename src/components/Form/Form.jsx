import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Button, TextField, Rating } from "@mui/material";

function Form({ formSection }) {
    // Grab existing data from reducer
    const formData = useSelector(store => store.feedbackReducer);

    // If the relevant data is in the store, set the input to that value
    const [input, setInput] = useState(formData[formSection] || '');

    const dispatch = useDispatch();
    const history = useHistory();
    let prompt, inputType, pgIndex;
    const navList = ['/', '/understanding', '/support', '/comments', '/review'];

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

    const slider = (
        <Rating type={inputType}
            onChange={(e) => setInput(e.target.value)}
            value={inputType === "number" ? Number(input) : input}
            min={1}
            max={5}
            ></Rating>
    )

    const textField = (
        <TextField></TextField>
    )

    return (
        <div>
            <h2>{prompt}</h2>
            <form onSubmit={handleSubmit}>
                {inputType === "number" ? slider : ''}
                <Button variant="contained" type="submit">NEXT</Button>
            </form>
            <div id="back-btn-container">
                {pgIndex > 0 && <Button variant="contained" onClick={handleBack}>Back</Button>}
            </div>
        </div>
    );
}

export default Form;