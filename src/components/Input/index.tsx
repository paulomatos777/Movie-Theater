import React from "react";
import Form from "react-bootstrap/Form";

type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  return (
    <Form>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Control
          type="search"
          placeholder="Search a movie"
          onChange={props.onChange}
        />
      </Form.Group>
    </Form>
  );
}

export default Input;
