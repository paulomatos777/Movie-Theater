import React, { ButtonHTMLAttributes } from "react";
import "./styles.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
