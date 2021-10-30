import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function FormFeeling({formSection}) {
    const formData = useSelector(store => store.feedbackReducer);
    const [input, setInput] = useState(formData[formSection] || '');
    const dispatch = useDispatch();
    const history = useHistory();
    let prompt, inputType, pgIndex;
    const navList = ['/', '/understanding', '/support', '/comments', '/review']

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

    return (
        <div>
            <h2>{prompt}</h2>
            <form onSubmit={handleSubmit}>
                <input type={inputType}
                onChange={(e) => setInput(e.target.value)}
                value={input}></input>
                <button>NEXT</button>
            </form>
        </div>
    );
}

export default FormFeeling;