import type { FC, ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
