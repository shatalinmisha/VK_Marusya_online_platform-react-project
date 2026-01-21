import { useAppSelector, useAppDispatch } from "@/app/store";
import { closeTrailer } from "@/features/Trailer/trailerSlice";
import styles from "./TrailerModal.module.scss";

export const TrailerModal = () => {
  const dispatch = useAppDispatch();

  const { isTrailerOpen, selectedMovie } = useAppSelector(
    state => state.trailer
  );

  if (!isTrailerOpen || !selectedMovie?.trailerYoutubeId) return null;

  return (
    <div className={styles.trailerModal}>
      <div className={styles.overlay} onClick={() => dispatch(closeTrailer())} />
      <div className={styles.modalContent}>
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${selectedMovie.trailerYoutubeId}`}
          title={selectedMovie.title}
          allowFullScreen
        />
        <button onClick={() => dispatch(closeTrailer())}>Закрыть</button>
      </div>
    </div>
  );
};
