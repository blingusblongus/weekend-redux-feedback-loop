function Review(props) {
    const handleClick = () => {

    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <div>Feelings:</div>
            <div>Understanding:</div>
            <div>Support:</div>
            <div>Comments:</div>
            <button onClick={handleClick}>SUBMIT</button>

        </div>
    );
}

export default Review;