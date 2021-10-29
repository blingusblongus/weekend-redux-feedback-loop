function FormFeeling(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Feeling"></input>
                <button>NEXT</button>
            </form>
        </div>
    );
}

export default FormFeeling;