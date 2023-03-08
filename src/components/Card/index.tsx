import Card from "react-bootstrap/Card";
import { CardContainer } from "./styles";

interface MyCardProps {
  title: string;
  text: string;
  // hasButton: boolean;
}

export default function MyCard({ title, text }: MyCardProps) {
  return (
    <CardContainer>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </CardContainer>
  );
}
