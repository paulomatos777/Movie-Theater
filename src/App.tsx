import "./App.css";
import Header from "./components/Header";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="App">
      <Header title="Cinema" />
      <Movie></Movie>
    </div>
  );
}

export default App;
