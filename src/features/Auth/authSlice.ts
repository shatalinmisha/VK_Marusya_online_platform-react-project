import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import type { User } from "./types";

interface AuthState {
    isAuthOpen: boolean;
    mode: "login" | "register";
    user: User | null;
    status: "idle" | "loading" | "error";
    error: string | null;
}

const initialState: AuthState = {
    isAuthOpen: false,
    mode: "login",
    user: null,
    status: "idle",
    error: null,
};

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async () => {
        await authApi.logout();
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (data: { email: string; password: string }, { rejectWithValue }) => {
        try {
            await authApi.login(data);
            return await authApi.getProfile();
        } catch (error: any) {
            return rejectWithValue(error.response?.status);
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (data: {
        email: string;
        password: string;
        name: string;
        surname: string;
    },
        { rejectWithValue }
    ) => {
        try {
            await authApi.register(data);
            // Логинимся
            await authApi.login({
                email: data.email,
                password: data.password,
            });

            // Получаем профиль
            return await authApi.getProfile();
        } catch (error: any) {
            return rejectWithValue(error.response?.status);
        }
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
            .addCase(fetchProfile.rejected, state => {
                state.user = null;
            })
            .addCase(logoutThunk.fulfilled, state => {
                state.user = null;
            })
            .addCase(login.pending, state => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "idle";
                state.user = action.payload;
                state.isAuthOpen = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "error";
                state.error =
                    action.payload === 400
                        ? "Неверный логин или пароль"
                        : "Ошибка авторизации";
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthOpen = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = "error";

                if (action.payload === 409) {
                    state.error = "Пользователь с таким email уже существует";
                } else {
                    state.error = "Ошибка регистрации";
                }
            });
    },
});

export const { openAuth, closeAuth, logout } = authSlice.actions;
export default authSlice.reducer;