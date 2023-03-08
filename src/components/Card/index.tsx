import Card from "react-bootstrap/Card";
import Button from "../Button";
import { CardContainer } from "./styles";

interface MyCardProps {
  title: string;
  text: string;
}

export default function MyCard({ title, text }: MyCardProps) {
  return (
    <CardContainer>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </CardContainer>
  );
}
