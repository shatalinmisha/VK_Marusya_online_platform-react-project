import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import type { User } from "./types";

interface AuthState {
    isAuthOpen: boolean;
    mode: "login" | "register";
    user: User | null;
    status: "idle" | "loading" | "error";
}

const initialState: AuthState = {
    isAuthOpen: false,
    mode: "login",
    user: null,
    status: "idle",
};

export const login = createAsyncThunk(
    "auth/login",
    async (data: { email: string; password: string }) => {
        await authApi.login(data);
        return await authApi.getProfile();
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (data: {
        email: string;
        password: string;
        name: string;
        surname: string;
    }) => {
        await authApi.register(data);
        return await authApi.getProfile();
    }
);

export const fetchProfile = createAsyncThunk(
    "auth/profile",
    async () => {
        return await authApi.getProfile();
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        openAuth(state, action: PayloadAction<"login" | "register">) {
            state.isAuthOpen = true;
            state.mode = action.payload;
        },
        closeAuth(state) {
            state.isAuthOpen = false;
        },
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.isAuthOpen = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthOpen = false;
      });
  },
});

export const { openAuth, closeAuth, logout } = authSlice.actions;
export default authSlice.reducer;