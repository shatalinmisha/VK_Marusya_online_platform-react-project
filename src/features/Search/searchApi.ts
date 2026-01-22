// features/Search/searchApi.ts
import { api } from "@/api/api";
import type { Movie } from "@/features/Movies/types";

export const searchApi = {
  searchByTitle: async (title: string): Promise<Movie[]> => {
    const { data } = await api.get("/movie", {
      params: {
        title,
        count: 5,
      },
    });
    return data;
  },
};
