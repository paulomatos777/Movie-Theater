import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {" "}
        <Header title="" />
        <Movie></Movie>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
