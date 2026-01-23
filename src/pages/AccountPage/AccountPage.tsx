import { useAppDispatch, useAppSelector } from "@/app/store";
import { logoutThunk } from "@/features/Auth/authSlice";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import styles from "./AccountPage.module.scss";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const favorites = useAppSelector((state) => state.favorites.movies);

  if (!user) return null;

  return (
    <section className={styles.account}>
      <div className="container">
        <h2 className={styles.title}>Мой аккаунт</h2>

        <div className={styles.sections}>
          {/* ===== Избранные фильмы ===== */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Избранные фильмы</h3>

            {favorites.length === 0 ? (
              <p className={styles.empty}>У вас пока нет избранных фильмов</p>
            ) : (
              <ul className={styles.favoritesList}>
                {favorites.map((movie) => (
                  <li className={styles.favoritesItem} key={movie.id}>
                    <MovieCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ===== Настройки аккаунта ===== */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Настройка аккаунта</h3>

            <div className={styles.field}>
              <span className={styles.label}>Имя Фамилия</span>
              <span className={styles.value}>
                {user.name} {user.surname}
              </span>
            </div>

            <div className={styles.field}>
              <span className={styles.label}>Электронная почта</span>
              <span className={styles.value}>{user.email}</span>
            </div>

            <button
              className={styles.logout}
              onClick={() => dispatch(logoutThunk())}
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
