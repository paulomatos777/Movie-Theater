import "./App.css";
// import Button from "./components/Button";
import { Button } from 'react-bootstrap';
import MyCard from "./components/Card";
import Header from "./components/Header";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Header title="Cinema" />
      <Button variant="primary">Clique</Button>
      <Button variant="outline-primary">Primary</Button>{" "}
      <MyCard title="Meu título" text="Meu texto" />
    </div>
  );
}

export default App;
