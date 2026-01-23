import type { FC } from "react";
import type { Movie } from "@/features/Movies/types";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

interface Props {
  movie: Movie;
  index?: number;
}

export const MovieCard: FC<Props> = ({ movie, index }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.card}>
      <div className={styles.poster}>
        <img src={movie.posterUrl} alt={movie.title} />

        {index !== undefined && <div className={styles.index}>{index + 1}</div>}
        <div className={styles.rating}>⭐ {movie.tmdbRating}</div>

        <div className={styles.overlay}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.meta}>
            {movie.relaseYear} • {movie.genres.join(", ")}
          </div>
        </div>
      </div>
    </Link>
  );
};
