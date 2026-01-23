import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "@/features/Movies/types";

interface FavoritesState {
  movies: Movie[];
}

const initialState: FavoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Movie>) {
      const exists = state.movies.find((m) => m.id === action.payload.id);
      if (exists) {
        state.movies = state.movies.filter((m) => m.id !== action.payload.id);
      } else {
        state.movies.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
