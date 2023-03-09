import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="App">
      <Header title="" />
      <Movie></Movie>
      <Footer></Footer>
    </div>
  );
}

export default App;
