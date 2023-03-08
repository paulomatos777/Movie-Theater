import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputType } from "../../store/types";

interface InputProps {
  variant: string;
  type: InputType["type"];
  text: string;
}

function Input({ variant, type, text }: InputProps) {
  return (
    <Form>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Search a movie" />
      </Form.Group>
      <Button variant={variant} type={type}>
        {text}
      </Button>
    </Form>
  );
}

export default Input;
