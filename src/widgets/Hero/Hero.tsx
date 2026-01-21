import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import { Button } from "@/components/Ui/Button/Button";
import { moviesApi } from "@/features/Movies/moviesApi";
import type { Movie } from "@/features/Movies/types";
import { useAppDispatch } from "@/app/store";
import { openTrailer } from "@/features/Trailer/trailerSlice";

export const Hero = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const fetchRandomMovie = async () => {
    try {
      setLoading(true);
      const data = await moviesApi.getRandom();
      setMovie(data);
    } catch (err) {
      console.error("Failed to load random movie:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  if (loading || !movie) {
    return <section className={styles.hero}>Загрузка...</section>;
  }

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${movie.backdropUrl})`,
      }}
    >
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <p>{movie.plot}</p>

        <div className={styles.actions}>
          <Button onClick={() => dispatch(openTrailer(movie))}>Трейлер</Button>
          <Button variant="secondary">О фильме</Button>
          <Button variant="secondary" onClick={fetchRandomMovie}>
            Случайный фильм
          </Button>
        </div>
      </div>
    </section>
  );
};
