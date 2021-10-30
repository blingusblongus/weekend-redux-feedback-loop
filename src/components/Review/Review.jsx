import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function Review(props) {
    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const handleClick = () => {
        console.log('clicked');
        axios.post('/', feedback)
            .then(response => {
                console.log('POST SUCCESS');

                //On success, clear feedbackReducer
                dispatch({
                    type: 'CLEAR_FEEDBACK'
                })

                // and navigate to success page
                history.push('/success');
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <button onClick={()=> history.push('/comments')}>Back</button>
            <div>Feeling: {feedback.feeling}</div>
            <div>Understanding: {feedback.understanding}</div>
            <div>Support: {feedback.support}</div>
            <div>Comments: {feedback.comments}</div>
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    );
}

export default Review;