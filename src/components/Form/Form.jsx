import { useState } from "react";

function FormFeeling({formSection}) {
    const [input, setInput] = useState('');
    let prompt, inputType;

    switch (formSection) {
        case 'feeling':
            prompt = "How are you feeling today?";
            inputType = 'number';
            break;
        case 'understanding':
            prompt = "How well are you understanding the content?";
            inputType = 'number';
            break;
        case 'supported':
            prompt = "How well are you being supported?";
            inputType = 'number';
            break;
        case 'comments':
            prompt = "Any comments you want to leave?";
            inputType = 'text';
            break;
        default:
            break;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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