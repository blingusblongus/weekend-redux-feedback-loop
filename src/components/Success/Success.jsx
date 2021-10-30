import { useHistory } from "react-router";

function Success(props) {
    const history = useHistory();
    
    return (
        <div>
            <h2>Thanks for your feedback!</h2>
            <p>Your responses have been recorded</p>
            <button onClick={() => history.push('/')}>Leave New Feedback</button>
        </div>
        
    )
}

export default Success;