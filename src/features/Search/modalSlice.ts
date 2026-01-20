import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpen: false,
  isAuthOpen: false,
  isTrailerOpen: false,
}

const modalSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        openSearch(state) {
            state.isSearchOpen = true
        },
        closeSearch(state) {
            state.isSearchOpen = false
        },
    },
})

export const { openSearch, closeSearch } = modalSlice.actions
export default modalSlice.reducer