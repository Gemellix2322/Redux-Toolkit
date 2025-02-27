import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMovie } from "../movieSlice";
import { useNavigate } from "react-router-dom";

const MovieChange = () => {
    const navigate = useNavigate();
    const [changedMovie, setChangedMovie] = useState("");
    const dispatch = useDispatch();

    const handleSaveData = () => {
        if (changedMovie) {
            dispatch(changeMovie(changedMovie))
            navigate('/')
        }
    }

    return (
        <>
        <input onChange={(e) => setChangedMovie(e.target.value)} value={changedMovie}/>
        <button onClick={() => handleSaveData(changedMovie)}>Save</button>
        </>
    )
}

export default MovieChange;