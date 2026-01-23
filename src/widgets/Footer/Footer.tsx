import vk from "@/assets/vk.svg";
import ok from "@/assets/ok.svg";
import youtube from "@/assets/youtube.svg";
import tg from "@/assets/telegram.svg";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul className={styles.list}>
          <li>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
              <img src={vk} width="36" height="36" alt="vk" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} width="36" height="36" alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://ok.ru/" target="_blank" rel="noopener noreferrer">
              <img src={ok} width="36" height="36" alt="ok" />
            </a>
          </li>
          <li>
            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tg} width="36" height="36" alt="tg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
