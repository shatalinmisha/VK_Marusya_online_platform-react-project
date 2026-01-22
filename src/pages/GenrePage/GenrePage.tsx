import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { fetchMoviesByGenre } from "@/features/Genres/genresSlice";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import styles from "./GenrePage.module.scss";

export const GenrePage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.genres.moviesByGenre[id!]);

  useEffect(() => {
    if (id && !movies) {
      dispatch(fetchMoviesByGenre(id));
    }
  }, [dispatch, id, movies]);

  if (!movies) return <div>Загрузка...</div>;

  return (
    <section className={styles.genre}>
      <div className="container">
        <h1 className={styles.genre__title}>{id}</h1>

        <ul className={styles.genre__list}>
          {movies.map((movie, index) => (
            <li key={movie.id}>
              <MovieCard movie={movie} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
