import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMovie } from "../movieSlice";
import { useNavigate, useParams } from "react-router-dom";

const MovieChange = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movieName, setMovieName] = useState("");
    const dispatch = useDispatch();

    const handleSaveData = () => {
        if (movieName) {
            dispatch(changeMovie({
                id: id,
                name: movieName
            }))
            navigate('/')
            console.log("Changed movie", id, movieName);
        }
    }

    return (
        <>
            <input
                onChange={(e) => setMovieName(e.target.value)}
                value={movieName}
                placeholder="Enter new movie name"
            />
            <button onClick={handleSaveData}>Save</button>
        </>
    )
}

export default MovieChange;