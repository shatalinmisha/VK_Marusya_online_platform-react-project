import styles from "./Hero.module.scss";
import { Button } from "@/components/Ui/Button/Button";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <h1>Шерлок Холмс и доктор Ватсон</h1>
        <p>Увлекательные приключения самого известного сыщика</p>

        <div className={styles.actions}>
          <Button>Трейлер</Button>
          <Button variant="secondary">О фильме</Button>
        </div>
      </div>
    </section>
  );
};
