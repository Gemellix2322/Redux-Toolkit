import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMovie } from "../movieSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Paper, Box } from "@mui/material";
import BackIcon from '@mui/icons-material/ArrowBack';

const MovieChange = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movieName, setMovieName] = useState("");
    const dispatch = useDispatch();

    const handleSaveData = () => {
        if (movieName) {
            dispatch(changeMovie({
                id: id - 1,
                name: movieName
            }))
            navigate('/')
            console.log("Changed movie", id, movieName);
        }
    }

    const handleback = () => {
        navigate('/')
    }

    return (
        <>
            <Box sx={{ position: 'fixed', top: 50, left: 50 }}>
                <Button
                    onClick={handleback}
                    startIcon={<BackIcon />}
                    sx={{ position: 'absolute', left: 0, top: 0 }}
                >
                    Back
                </Button>
            </Box>
            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
                <TextField
                    onChange={(e) => setMovieName(e.target.value)}
                    value={movieName}
                    placeholder="Enter new movie name"
                />
                <Button onClick={handleSaveData}>Save</Button>
            </Paper>
        </>
    )
}

export default MovieChange;