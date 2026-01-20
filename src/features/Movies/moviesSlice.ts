import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Movie } from "./types";
import { moviesApi } from "./moviesApi";

interface MoviesState {
  rows: Record<string, Movie[]>;
  loading: boolean;
}

const initialState: MoviesState = {
  rows: {},
  loading: false,
};

export const fetchMoviesRow = createAsyncThunk<
  { key: string; movies: Movie[] },
  string
>("movies/fetchRow", async (key) => {
  const movies = await moviesApi.getByFilter(key);
  return { key, movies };
});


const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMoviesRow.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMoviesRow.fulfilled, (state, action) => {
        state.loading = false;
        state.rows[action.payload.key] =
          action.payload.movies;
      });
  },
});

export default moviesSlice.reducer;
