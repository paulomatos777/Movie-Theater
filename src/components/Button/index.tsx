import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;