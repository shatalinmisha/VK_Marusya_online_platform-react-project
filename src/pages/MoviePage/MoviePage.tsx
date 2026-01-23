import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { fetchMovieById } from "@/features/Movies/moviesSlice";
import { toggleFavorite } from "@/features/Favorites/favoritesSlice";
import styles from "./MoviePage.module.scss";
import { ratingColor } from "@/components/utils/ratingColor";
import { Button } from "@/components/Ui/Button/Button";
import { openTrailer } from "@/features/Trailer/trailerSlice";
import { openAuth } from "@/features/Auth/authSlice";


export const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const { current: movie, loading } = useAppSelector((state) => state.movies);
  const favorites = useAppSelector((state) => state.favorites.movies);
  

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(Number(id)));
    }
  }, [id, dispatch]);

  if (loading || !movie) {
    return <p>Загрузка фильма...</p>;
  }

  const isFavorite = favorites.some((m) => m.id === movie.id);

  const handleFavoriteClick = () => {
  if (!user) {
    dispatch(openAuth("login"));
    return;
  }

  dispatch(toggleFavorite(movie));
};

  return (
    <section className={styles.movie}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.meta}>
              <span
                className={styles.rating}
                style={{ backgroundColor: ratingColor(movie.tmdbRating) }}
              >
                ⭐ {movie.tmdbRating}
              </span>
              <span>{movie.relaseYear}</span>
              <span>{movie.genres.join(", ")}</span>
              <span>{movie.runtime} мин</span>
            </div>

            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.plot}>{movie.plot}</p>

            <div className={styles.actions}>
              <Button onClick={() => dispatch(openTrailer(movie.id))}>
                Трейлер
              </Button>
              <button
                className={`${styles.favorite} ${
                  isFavorite ? styles.active : ""
                }`}
                onClick={handleFavoriteClick}
                title={!user ? "Войдите, чтобы добавить в избранное" : ""}
              >
                {isFavorite ? "В избранном" : "В избранное"}
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
        </div>

        <div className={styles.about}>
          <h3>О фильме</h3>

          <ul className={styles.info}>
            <li>
              <span>Язык оригинала</span>
              <span>{movie.language || "—"}</span>
            </li>
            <li>
              <span>Бюджет</span>
              <span>{movie.budget || "—"}</span>
            </li>
            <li>
              <span>Выручка</span>
              <span>{movie.revenue || "—"}</span>
            </li>
            <li>
              <span>Режиссёр</span>
              <span>{movie.director || "—"}</span>
            </li>
            <li>
              <span>Продакшен</span>
              <span>{movie.production || "—"}</span>
            </li>
            <li>
              <span>Награды</span>
              <span>{movie.awardsSummary || "—"}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
