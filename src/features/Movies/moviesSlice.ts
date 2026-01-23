import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Movie } from "./types";
import { moviesApi } from "./moviesApi";

interface MoviesState {
  rows: Record<string, Movie[]>;
  current: Movie | null;
  loading: boolean;
}

const initialState: MoviesState = {
  rows: {},
  current: null,
  loading: false,
};

export const fetchMoviesRow = createAsyncThunk<
  { key: string; movies: Movie[] },
  string
>("movies/fetchRow", async (key) => {
  if (key === "top10") {
    const movies = await moviesApi.getTop10();
    return { key, movies };
  }

  const movies = await moviesApi.getByFilter(key);
  return { key, movies };
});

export const fetchMovieById = createAsyncThunk<
  Movie,
  number
>("movies/fetchById", async (id) => {
  return await moviesApi.getById(id);
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
      })
      .addCase(fetchMovieById.pending, state => {
        state.loading = true;
        state.current = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      });
  },
});

export default moviesSlice.reducer;
