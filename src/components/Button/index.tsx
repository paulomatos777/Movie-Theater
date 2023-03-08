import ButtonComponent from "react-bootstrap/Button";
import { ButtonType } from "../../store/types";

interface InputProps {
  variant: string;
  type: ButtonType["type"];
  text: string;
}

function Button({ variant, type, text }: InputProps) {
  return (
    <ButtonComponent variant={variant} type={type}>
      {text}
    </ButtonComponent>
  );
}

export default Button;
