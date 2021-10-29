function FormComment(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Feeling"></input>
                <button>NEXT</button>
            </form>
        </div>
    );
}

export default FormComment;