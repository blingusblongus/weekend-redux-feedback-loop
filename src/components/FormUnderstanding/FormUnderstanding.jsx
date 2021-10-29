function FormUnderstanding(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Feeling"></input>
                <button>NEXT</button>
            </form>
        </div>
    );
}

export default FormUnderstanding;