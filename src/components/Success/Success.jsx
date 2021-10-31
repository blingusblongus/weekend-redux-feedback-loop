import { Button } from "@mui/material";
import { useHistory } from "react-router";

function Success(props) {
    const history = useHistory();
    
    return (
        <div>
            <h2>Thanks for your feedback!</h2>
            <p>Your responses have been recorded</p>
            <Button 
                onClick={() => history.push('/')}
                variant="contained">Leave New Feedback</Button>
        </div>
        
    )
}

export default Success;