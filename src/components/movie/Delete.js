import { useNavigate } from "react-router-dom";
import { drop } from "./Movie";

const Delete = ({id}) => {

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        drop(id);
        navigate("/movies");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-danger">Delete</button>
        </form>
    );
}

export default Delete;