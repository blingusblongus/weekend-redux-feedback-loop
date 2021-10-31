import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Button, TextField, Rating, Paper } from "@mui/material";
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

    const handleNext = (e) => {
        e.preventDefault();
        console.log('next')

        // validate
        if (!input && formSection !== 'comments') {
            setDisplayErr(true);
            return;
        }
        // store entered data in redux
        updateStore();

        //Navigate to the next page in the navList
        history.push(navList[pgIndex + 1]);
    }

    const handleBack = (e) => {
        console.log('back')
        e.preventDefault();
        // store entered data in redux
        updateStore();

        // Navigate back
        history.push(navList[pgIndex - 1]);
    }

    // on call, send current input data to redux
    const updateStore = () => {
        dispatch({
            type: 'SUBMIT_SECTION',
            payload: {
                // reducer adds {[formSection]: value}
                formSection: formSection,
                value: input
            }
        });
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
                    onChange={(e) => setInput(e.target.value)}
                    multiline
                    rows={4}
                    size="small"
                    margin="dense"
                    value={input}
                    fullWidth
                    autoFocus
                ></TextField>
            </div>
        )
    }

    return (
        <div id="form-container">
            <h2>{prompt}</h2>
            <form id="page-form" className="relative" onSubmit={handleNext}>

                {/* Render Rating or TextField as appropriate */}
                {inputField}

                <div id="button-container">
                    {/* Leave out the back button on the first page */}
                    {pgIndex > 0 && (
                        <div id="back-btn-wrapper">
                            <Button variant="contained"
                                onClick={handleBack}>
                                Back
                            </Button>
                        </div>
                    )}

                    {/* Center Next Button if it's the first page */}
                    <div className={pgIndex == 0 ? "flex-center" : undefined}
                        id="next-wrapper">
                        <Button variant="contained"
                            type="submit"
                            form="page-form">
                            NEXT
                        </Button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Form;