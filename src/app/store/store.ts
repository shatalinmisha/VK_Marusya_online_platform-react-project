import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/features/Search/searchSlice";
import moviesReducer from "@/features/Movies/moviesSlice";
import authReducer from "@/features/Auth/authSlice"
import trailerReducer from "@/features/Trailer/trailerSlice"
import genresReducer from "@/features/Genres/genresSlice";
import searchReducer from "@/features/Search/searchSlice";
import favoritesReducer from "@/features/Favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    movies: moviesReducer,
    genres: genresReducer,
    auth: authReducer,
    trailer: trailerReducer,
    search: searchReducer,
    favorites: favoritesReducer,
  },
});