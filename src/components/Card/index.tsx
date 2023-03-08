import Card from "react-bootstrap/Card";
import Button from "../Button";
import { CardContainer } from "./styles";

interface MyCardProps {
  title: string;
  text: string;
  hasButton: boolean;
}

export default function MyCard({ title, text, hasButton }: MyCardProps) {
  return (
    <CardContainer>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          {hasButton && (
            <Button variant="primary" type="submit" text={text}></Button>
          )}
        </Card.Body>
      </Card>
    </CardContainer>
  );
}
