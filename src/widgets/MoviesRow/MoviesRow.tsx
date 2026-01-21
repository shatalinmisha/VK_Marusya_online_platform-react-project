import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { fetchMoviesRow } from "@/features/Movies/moviesSlice";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import styles from "./MoviesRow.module.scss";

interface Props {
  title: string;
  query: string;
}

export const MoviesRow = ({ title, query }: Props) => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.movies.rows[query]);

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    if (!movies) {
      dispatch(fetchMoviesRow(query));
    }
  }, [dispatch, query, movies]);

  if (loading && !movies) {
    return <div>Загрузка...</div>;
  }

  if (!Array.isArray(movies)) return null;

  return (
    <section className={styles.row}>
      <h2>{title}</h2>

      <ul className={styles.list}>
        {movies.map((movie, index) => (
          <li key={movie.id}>
              <MovieCard movie={movie} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};
