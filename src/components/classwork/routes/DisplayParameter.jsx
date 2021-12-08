import { useParams } from "react-router-dom";

function DisplayParameter() {
    const {myParameter} = useParams();

    return(
        <h1>
            Your Parameter was:
            {' '}
            {myParameter}
        </h1>
    );
}

export default DisplayParameter;
