import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Button, TextField, Rating } from "@mui/material";
import './Form.css';

// Reactions for Rating components
import reactions from "../../modules/reactions";

function Form({ formSection }) {
    const dispatch = useDispatch();
    const history = useHistory();
    let prompt, inputType, pgIndex, inputField;

    // Grab existing data from reducer
    const formData = useSelector(store => store.feedbackReducer);

    // If the relevant data is in the store, set the input to that value
    const [input, setInput] = useState(formData[formSection] || '');
    const [displayErr, setDisplayErr] = useState(false);

    // Default flow to help with history hook
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

        if(!input && formSection !== 'comments'){
            setDisplayErr(true);
            return;
        }

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

    const selectRating = (e) => {
        setInput(e.target.value);
        setDisplayErr(false);
    }

    // assign inputField to appropriate component
    if (inputType === "number") {
        inputField = (
            <div id="input-container">
                <div id="reaction-wrapper">
                    {reactions[input - 1]}
                </div>
                <div className="relative" id="rating-wrapper">
                    <Rating type={inputType}
                        onChange={selectRating}
                        value={parseInt(input)}
                        min={1}
                        max={5}
                        size="large"
                    ></Rating>
                    {displayErr && <div className="absolute" id="error-msg">Select 1 to 5 stars</div>}
                </div>
            </div>
        )
    } else {
        inputField = (
            <div id="input-container">
                <TextField
                    onChange={(e)=>setInput(e.target.value)}
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
        <div id="form-container">
            <h2>{prompt}</h2>
            <form onSubmit={handleSubmit}>
                {inputField}
                <div id="next-wrapper">
                    <Button variant="contained" type="submit">NEXT</Button>
                </div>
            </form>
            <hr />
            <div id="back-btn-wrapper">
                {pgIndex > 0 && <Button variant="contained" onClick={handleBack}>Back</Button>}
            </div>
        </div>
    );
}

export default Form;