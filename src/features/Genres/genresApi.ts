import { api } from "@/api/api";
import type { Genre } from "./types";
import type { Movie } from "@/features/Movies/types";

export const genresApi = {
  /** Все жанры */
  getAll: async (): Promise<Genre[]> => {
    const { data } = await api.get("/movie/genres");
    return data;
  },

  /** Фильмы по жанру */
  getMoviesByGenre: async (genre: string): Promise<Movie[]> => {
    const { data } = await api.get("/movie", {
      params: { genre },
    });
    return data;
  },
};