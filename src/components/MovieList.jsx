import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";
import { useNavigate } from "react-router-dom";

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
            <h1>Movie List</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    {movie.name}
                    <button onClick={() => handleRemoveMovie(movie.id)}>Delete Movie</button>
                    <button onClick={() => handleChangeMovie(movie.id)}>Change Movie</button>
                </div>
            ))}
        </div>
    )
}