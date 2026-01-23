import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { login } from "@/features/Auth/authSlice";
import logo from "@/assets/marusya_modal.png";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const { error, status } = useAppSelector(state => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <img className={styles.form__logo_img} src={logo} width="156" height="35" alt="Логотип маруся" />

      <input
        type="email"
        placeholder="Электронная почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {status === "loading" && (
        <p className={styles.info}>Входим...</p>
      )}

      {error && (
        <p className={styles.error}>{error}</p>
      )}

      <button type="submit" disabled={status === "loading"}>Войти</button>
    </form>
  );
};
