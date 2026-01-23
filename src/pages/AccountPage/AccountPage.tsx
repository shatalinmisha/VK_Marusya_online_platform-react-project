import { useAppDispatch, useAppSelector } from "@/app/store";
import { logoutThunk } from "@/features/Auth/authSlice";
import styles from "./AccountPage.module.scss";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <section className={styles.account}>
      <div className="container">
        <h2 className={styles.title}>Мой аккаунт</h2>

        <div className={styles.sections}>
          {/* ===== Избранные фильмы ===== */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Избранные фильмы</h3>

            {/* позже сюда подключим список */}
            <p className={styles.empty}>У вас пока нет избранных фильмов</p>
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
