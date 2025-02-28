import { useState } from "react";
import { addMovie } from '../movieSlice';
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";

export const MovieInput = () => {
    const [newMovie, setNewMovie] = useState("");
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        if (newMovie) {
            dispatch(addMovie(newMovie));
            setNewMovie("")
        }
    };

    return (
        <>
            <TextField label="New Movie" onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
            <Button onClick={handleAddMovie}>Add Movie</Button>
        </>
    );
}