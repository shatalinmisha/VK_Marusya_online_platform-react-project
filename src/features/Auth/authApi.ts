import { api } from "@/api/api";

export const authApi = {
    login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),

    logout: () => api.get("/auth/logout"),

    register: (data: {
    email: string;
    password: string;
    name: string;
    surname: string;
  }) => api.post("/user", data),

  getProfile: () => api.get("/profile").then(res => res.data),
}