import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { fetchGenres } from "@/features/Genres/genresSlice";
import { Link } from "react-router-dom";
import styles from "./GenresPage.module.scss";

export const GenresPage = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres.list);
  const loading = useAppSelector((state) => state.genres.loading);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;

  return (
    <section className={styles.genres}>
      <div className="container">
        <h1>Жанры фильмов</h1>

        <ul className={styles.genres__list}>
          {genres.map((genre) => (
            <li key={genre} className={styles.genres__item}>
              <Link to={`/genres/${genre}`} className={styles.genres__link}>
                <p className={styles.genres__text}>{genre}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
