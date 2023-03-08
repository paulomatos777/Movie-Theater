import { Button as MyButton, ButtonProps } from "react-bootstrap";
import { ButtonVariant } from "react-bootstrap/esm/types";
import styled from "styled-components";

export interface ContainerProps extends ButtonProps {
  icon?: boolean;
  divider?: boolean;
  shape?: "round" | "normal";
  minwidth?: number;
  loading?: boolean;
  variant?: ButtonVariant;
}

export const Container = styled(MyButton)<ContainerProps>`
  .btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    .btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-primary:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }

    .btn-secondary {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }

    .btn-secondary:hover {
      background-color: #5a6268;
      border-color: #545b62;
    }
  }
`;
