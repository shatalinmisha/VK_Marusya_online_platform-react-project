import styles from "./Header.module.scss"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">VK Маруся</Link>

      <nav>
        <Link to="/">Главная</Link>
        <Link to="/genres">Жанры</Link>
      </nav>

      <div>
        <button>Поиск</button>
        <button>Войти</button>
      </div>
    </header>
  )
}