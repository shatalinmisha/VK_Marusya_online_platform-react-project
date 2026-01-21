import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genresApi } from "./genresApi";
import type { Genre } from "./types";
import type { Movie } from "@/features/Movies/types";

interface GenresState {
  list: Genre[];
  moviesByGenre: Record<string, Movie[]>;
  loading: boolean;
}

const initialState: GenresState = {
  list: [],
  moviesByGenre: {},
  loading: false,
};

export const fetchGenres = createAsyncThunk(
  "genres/fetchAll",
  async () => await genresApi.getAll()
);

export const fetchMoviesByGenre = createAsyncThunk<
  { genre: string; movies: Movie[] },
  string
>("genres/fetchMoviesByGenre", async (genre) => {
  const movies = await genresApi.getMoviesByGenre(genre);
  return { genre, movies };
});

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenres.pending, state => {
        state.loading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.moviesByGenre[action.payload.genre] =
          action.payload.movies;
      });
  },
});

export default genresSlice.reducer;
