import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/features/Search/modalSlice";
import moviesReducer from "@/features/Movies/moviesSlice";
import authReducer from "@/features/Auth/authSlice"
import trailerReducer from "@/features/Trailer/trailerSlice"
import genresReducer from "@/features/Genres/genresSlice";


export const store = configureStore({
  reducer: {
    ui: uiReducer,
    movies: moviesReducer,
    genres: genresReducer,
    auth: authReducer,
    trailer: trailerReducer,
  },
});