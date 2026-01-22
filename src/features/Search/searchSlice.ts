import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Movie } from "@/features/Movies/types";
import { searchApi } from "./searchApi";

interface SearchState {
  results: Movie[];
  loading: boolean;
}

const initialState: SearchState = {
  results: [],
  loading: false,
};

export const fetchSearchMovies = createAsyncThunk(
  "search/fetch",
  async (query: string) => {
    if (!query) return [];
    return await searchApi.searchByTitle(query);
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch(state) {
      state.results = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;