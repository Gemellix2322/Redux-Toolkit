import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [
        { id: 1, name: "Interstellar" },
        { id: 2, name: "Harry Potter" },
    ],
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const newMovie = {
                id: state.movies[state.movies.length - 1] + 1,
                name: action.payload
            }
            state.movies.push(newMovie)
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter(
                (movie) => movie.id !== action.payload
            );  
        },
        changeMovie: (state, action) => {
            const changedMovie = {
                id: state.movies.id,
                name: action.payload
            }
            state.movies.push(changedMovie)
        }
    }
});

export const { addMovie, removeMovie, changeMovie } = movieSlice.actions;
export default movieSlice.reducer;