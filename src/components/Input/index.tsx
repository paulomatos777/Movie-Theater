import Form from "react-bootstrap/Form";

function Input() {
  return (
    <Form>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Control type="search" placeholder="Search a movie" />
      </Form.Group>
    </Form>
  );
}

export default Input;
