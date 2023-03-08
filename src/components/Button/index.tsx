// import ButtonComponent from "react-bootstrap/Button";
// import { ButtonType } from "../../store/types";

// interface InputProps {
//   variant: string;
//   type: ButtonType["type"];
//   text: string;
// }

// function Button({ variant, type, text }: InputProps) {
//   return (
//     <ButtonComponent variant={variant} type={type}>
//       {text}
//     </ButtonComponent>
//   );
// }

// export default Button;

// import ButtonComponent from "react-bootstrap/Button";
// import { ButtonType } from "../../store/types";

// interface InputProps {
//   variant: string;
//   type: ButtonType["type"];
//   text: string;
//   onClick: () => void | null; // adicionando a propriedade onClick
// }

// function Button({ variant, type, text, onClick }: InputProps) {
//   return (
//     <ButtonComponent variant={variant} type={type} onClick={onClick}>
//       {text}
//     </ButtonComponent>
//   );
// }

// export default Button;

import ButtonComponent from "react-bootstrap/Button";
import { ButtonType } from "../../store/types";

interface InputProps {
  variant: string;
  type: ButtonType["type"];
  text: string;
  onClick: () => void; // removido o null
}

function Button({ variant, type, text, onClick }: InputProps) {
  return (
    <ButtonComponent variant={variant} type={type} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
}

export default Button;
