import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "./styles";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      bg="primary"
      expand="lg"
      expanded={expanded}
      onToggle={handleToggle}
      collapseOnSelect={true}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/paulomatos777" className="link">
              Github
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/feed/" className="link">
              Linkedin
            </Nav.Link>
            <Nav.Link
              href="https://github.com/paulomatos777/Movie-Theater"
              className="link"
            >
              Repositório
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
