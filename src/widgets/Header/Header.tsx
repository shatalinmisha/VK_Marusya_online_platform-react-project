import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/app/store/hooks"
import { openSearch } from "@/features/Search/modalSlice"

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <Link to="/">VK Маруся</Link>

      <nav>
        <Link to="/">Главная</Link>
        <Link to="/genres">Жанры</Link>
      </nav>

      <div className={styles.actions}>
        <button onClick={() => dispatch(openSearch())}>Поиск</button>
        <button>Войти</button>
      </div>
    </header>
  );
};
