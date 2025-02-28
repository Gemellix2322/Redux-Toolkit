import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export const MovieList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        console.log(movies)
    })

    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id));
    };

    const handleChangeMovie = (id) => {
        navigate(`/change/${id}`)
        console.log(movies);
    }

    return (
        <div>
            <Typography variant="h3">Movie List</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movies) => (
                            <TableRow key={movies.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center">{movies.id}</TableCell>
                                <TableCell>{movies.name}</TableCell>
                                <TableCell align="left">
                                    <Button onClick={handleRemoveMovie}>Delete Movie</Button>
                                    <Button onClick={handleChangeMovie}>Change Movie</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}