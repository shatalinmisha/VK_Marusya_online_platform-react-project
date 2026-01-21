import type { FC } from "react";
import type { Movie } from "@/features/Movies/types";

interface Props {
  movie: Movie;
  index?: number;
}


export const MovieCard: FC<Props> = ({ movie, index }) => {
  return (
     <div>
      {index !== undefined && <span>{index + 1}</span>}

      <img
        src={movie.posterUrl}
        alt={movie.title}
      />

      <h4>{movie.title}</h4>

      <p>⭐ {movie.tmdbRating}</p>
    </div>
  );
};