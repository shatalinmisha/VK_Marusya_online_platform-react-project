import { type ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { fetchSearchMovies } from "@/features/Search/searchSlice";
import { ratingColor } from "@/components/utils/ratingColor";
import logo from "@/assets/Marusya_logo-desc.png";
import styles from "./Header.module.scss";
import { openAuth } from "@/features/Auth/authSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { results, loading } = useAppSelector((state) => state.search);
  const [query, setQuery] = useState("");

  const user = useAppSelector((state) => state.auth.user);

  // debounce
  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(() => {
      dispatch(fetchSearchMovies(query));
    }, 300);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Link to="/">
            <img
              className={styles.header__img}
              src={logo}
              width="143"
              height="32"
              alt="Логотип Маруся"
            />
          </Link>

          <nav className={styles.header__nav}>
            <Link to="/" className={styles.header__nav_text}>
              Главная
            </Link>
            <Link to="/genres" className={styles.header__nav_text}>
              Жанры
            </Link>
          </nav>

          <div className={styles.search}>
            <input
              className={styles.header__input}
              type="text"
              placeholder="Поиск"
              value={query}
              onChange={onChange}
            />
            {query && (
              <ul className={styles.search__dropdown}>
                {loading && <li>Загрузка...</li>}
                {results.map((movie) => (
                  <Link
                    to={`/movie/${movie.id}`}
                    key={movie.id}
                    className={styles.search__item}
                  >
                    <div
                      className={styles.rating}
                      style={{ backgroundColor: ratingColor(movie.tmdbRating) }}
                    >
                      <span className={styles.rating__star}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className={styles.rating__number}>
                        {movie.tmdbRating}
                      </span>
                    </div>
                    <span>{movie.relaseYear}</span>
                    <span className={styles.title}>{movie.title}</span>
                    <span>{movie.genres[0]}</span>
                    <span>{movie.runtime} мин</span>
                  </Link>
                ))}
              </ul>
            )}
          </div>

          {user ? (
            <Link to="/account" className={styles.header__user}>
              {user.name}
            </Link>
          ) : (
            <button
              onClick={() => dispatch(openAuth("login"))}
              className={styles.header__btn_text}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
