import { useAppDispatch, useAppSelector } from "@/app/store";
import { closeAuth, openAuth } from "@/features/Auth/authSlice";
import { LoginForm } from "@/widgets/LoginForm/LoginForm";
import { RegisterForm } from "@/widgets/RegisterForm/RegisterForm";
import styles from "./AuthModal.module.scss";

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector(state => state.auth);

  return (
    <div className={styles.overlay} onClick={() => dispatch(closeAuth())}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={() => dispatch(closeAuth())}
        >
          ✕
        </button>

        {mode === "login" ? (
          <>
            <LoginForm />
            <button
              className={styles.switch}
              onClick={() => dispatch(openAuth("register"))}
            >
              Регистрация
            </button>
          </>
        ) : (
          <>
            <RegisterForm />
            <button
              className={styles.switch}
              onClick={() => dispatch(openAuth("login"))}
            >
              У меня есть пароль
            </button>
          </>
        )}
      </div>
    </div>
  );
};
