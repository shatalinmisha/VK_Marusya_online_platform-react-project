import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "@/features/Movies/types";

type TrailerState = {
  isTrailerOpen: boolean;
  selectedMovie: Movie | null;
};

const initialState: TrailerState = {
  isTrailerOpen: false,
  selectedMovie: null,
};

const trailerSlice = createSlice({
    name: "trailer",
    initialState,
    reducers: {
    openTrailer(state, action: PayloadAction<Movie>) {
      state.isTrailerOpen = true;
      state.selectedMovie = action.payload;
    },
    closeTrailer(state) {
      state.isTrailerOpen = false;
      state.selectedMovie = null;
    },
    },
})

export const { openTrailer, closeTrailer } = trailerSlice.actions
export default trailerSlice.reducer