import { useSelector } from "react-redux";

function Review(props) {
    const feedback = useSelector(store => store.feedbackReducer);
    
    const handleClick = () => {

    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <div>Feeling: {feedback.feeling}</div>
            <div>Understanding: {feedback.understanding}</div>
            <div>Support: {feedback.supported}</div>
            <div>Comments: {feedback.comments}</div>
            <button onClick={handleClick}>SUBMIT</button>

        </div>
    );
}

export default Review;