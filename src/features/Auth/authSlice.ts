import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthOpen: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        openAuth(state) {
            state.isAuthOpen = true
        },
        closeAuth(state) {
            state.isAuthOpen = false
        },
    },
})

export const { openAuth, closeAuth } = authSlice.actions
export default authSlice.reducer