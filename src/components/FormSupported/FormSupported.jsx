import { useState } from "react";

function FormSupported(props) {
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}>
                <input type="number"
                onChange={(e) => setInput(e.target.value)}
                value={input}></input>
                <button>NEXT</button>
            </form>
        </div>
    );
}

export default FormSupported;