import { useState } from "react";
import { useAppDispatch } from "@/app/store";
import { register } from "@/features/Auth/authSlice";
import logo from "@/assets/marusya_modal.png";
import styles from "../LoginForm/LoginForm.module.scss";

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(form));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <img className={styles.form__logo_img} src={logo} width="156" height="35" alt="Логотип маруся" />

      <input name="email" placeholder="Email" onChange={changeHandler} />
      <input name="name" placeholder="Имя" onChange={changeHandler} />
      <input name="surname" placeholder="Фамилия" onChange={changeHandler} />
      <input
        name="password"
        type="password"
        placeholder="Пароль"
        onChange={changeHandler}
      />

      <button type="submit">Создать аккаунт</button>
    </form>
  );
};
