
import { api } from "@/api/api";
import type { Movie } from "./types";

export const moviesApi = {
  /** Топ-10 по рейтингу */
  getTop10: async (): Promise<Movie[]> => {
    const { data } = await api.get("/movie/top10");
    return data;
  },

  /** Получение фильмов по фильтру */
  getByFilter: async (filter: string): Promise<Movie[]> => {
    const { data } = await api.get("/movie", {
      params: { filter },
    });
    return data;
  },

  /** Фильм по id */
  getById: async (id: number): Promise<Movie> => {
    const { data } = await api.get(`/movie/${id}`);
    return data;
  },

  /** Случайный фильм */
  getRandom: async (): Promise<Movie> => {
    const { data } = await api.get("/movie/random");
    return data;
  },
};

