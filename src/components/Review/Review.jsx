import axios from "axios";
import { useSelector } from "react-redux";

function Review(props) {
    const feedback = useSelector(store => store.feedbackReducer);
    
    const handleClick = () => {
        console.log('clicked');
        axios.post('/', feedback)
            .then(response => {
                console.log('POST SUCCESS');
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <div>Feeling: {feedback.feeling}</div>
            <div>Understanding: {feedback.understanding}</div>
            <div>Support: {feedback.support}</div>
            <div>Comments: {feedback.comments}</div>
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    );
}

export default Review;