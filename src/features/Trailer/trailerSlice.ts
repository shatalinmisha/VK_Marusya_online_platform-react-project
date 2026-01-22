import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TrailerState = {
  isTrailerOpen: boolean;
  movieId: number | null;
};

const initialState: TrailerState = {
  isTrailerOpen: false,
  movieId: null,
};

const trailerSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {
    openTrailer(state, action: PayloadAction<number>) {
      state.isTrailerOpen = true;
      state.movieId = action.payload;
    },
    closeTrailer(state) {
      state.isTrailerOpen = false;
      state.movieId = null;
    },
  },
})

export const { openTrailer, closeTrailer } = trailerSlice.actions
export default trailerSlice.reducer