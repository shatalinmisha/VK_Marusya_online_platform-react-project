import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/features/Search/modalSlice";
import moviesReducer from "@/features/Movies/moviesSlice";
// import authReducer from "@/features/Auth/authSlice"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    movies: moviesReducer,
    // auth: authReducer,
  },
});


