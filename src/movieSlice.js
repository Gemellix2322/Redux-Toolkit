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
                id: state.movies.length + 1,
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
            const { id, name } = action.payload;

            if (id  !== -1) {
                state.movies[id] = {
                    ...state.movies[id],
                    name: name
                }
            }
        }
    }
});

export const { addMovie, removeMovie, changeMovie } = movieSlice.actions;
export default movieSlice.reducer;