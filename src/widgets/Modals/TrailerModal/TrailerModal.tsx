import { useAppSelector, useAppDispatch } from "@/app/store";
import { closeTrailer } from "@/features/Trailer/trailerSlice";
import styles from "./TrailerModal.module.scss";
import { useEffect, useState } from "react";
import { moviesApi } from "@/features/Movies/moviesApi";
import type { Movie } from "@/features/Movies/types";

export const TrailerModal = () => {
  const dispatch = useAppDispatch();
  const { isTrailerOpen, movieId } = useAppSelector((state) => state.trailer);

  const [movie, setMovie] = useState<Movie | null>(null);

  // 🔹 Блокируем скролл страницы при открытой модалке
  useEffect(() => {
    document.body.style.overflow = isTrailerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isTrailerOpen]);

  useEffect(() => {
    if (!movieId) return;

    moviesApi.getById(movieId).then(setMovie);
  }, [movieId]);

  if (!isTrailerOpen || !movie) return null;

  const youtubeId = movie.trailerYoutubeId || movie.trailerUrl?.split("v=")[1];

  return (
    <div className={styles.trailerModal}>
      <div
        className={styles.overlay}
        onClick={() => dispatch(closeTrailer())}
      />
      <div className={styles.modalContent}>
        {youtubeId ? (
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            allowFullScreen
          />
        ) : (
          <p>Трейлер недоступен</p>
        )}
        <button onClick={() => dispatch(closeTrailer())}>Закрыть</button>
      </div>
    </div>
  );
};
