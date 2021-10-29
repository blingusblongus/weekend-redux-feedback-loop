function FormSupported(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Feeling"></input>
                <button>NEXT</button>
            </form>
        </div>
    );
}

export default FormSupported;