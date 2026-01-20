import axios from "axios";
import type { Movie } from "./types";

export const moviesApi = {
  getTop10: async (): Promise<Movie[]> => {
    const { data } = await axios.get("/movie/top10");
    return data;
  },

  getByFilter: async (filter: string): Promise<Movie[]> => {
    const { data } = await axios.get("/movie", {
      params: { filter },
    });
    return data;
  },
};
