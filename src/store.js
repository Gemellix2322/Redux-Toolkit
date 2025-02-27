import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

export const Store = configureStore({
    reducer: {
        movies: movieReducer,
    },
})