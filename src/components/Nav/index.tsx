import Nav from "react-bootstrap/Nav";

function BasicExample() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Github</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Linkedin</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Instagram</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;
