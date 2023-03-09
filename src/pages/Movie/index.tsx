import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Spinner from "../../components/Spinner";
import store from "../../store";
import { MovieActions } from "../../store/slices/movies";
import { Movie as MovieType } from "../../store/types";
import { Container } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carrousel from "../../components/Carrousel";

export default function Movie() {
  const [searchValue, setSearchValue] = useState("");
  const api = "http://localhost:3000";

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const { movies } = store.getState();

  const dispatch = useDispatch();

  function fetchMovie(title: string, apiKey: string) {
    const url = `${api}/movie?title=${title}&apikey=${apiKey}`;

    return fetch(url).then((response) => response.json());
  }
  const [movie, setMovie] = useState<MovieType | null>(null);

  function handleSearchButtonClick() {
    const apiKey = "8384263e";
    fetchMovie(searchValue, apiKey).then((data) => {
      setMovie(data);

      if (data.Response === "True") {
        toast.success("That's great, Movie Found!");
      } else {
        toast.error("Oh no, Movie not Found!");
      }
      dispatch(MovieActions.fetchMovieDataSuccess(data));
    });
  }

  return (
    <Container>
      <ToastContainer />
      <div>
        <tr className="s-btn">
          <td>
            <Input onChange={handleSearchInputChange} />
          </td>
          <td>
            <Button
              variant="primary"
              type="submit"
              text="Search"
              onClick={handleSearchButtonClick}
            ></Button>
          </td>
        </tr>
        {movie ? (
          <div>
            <div className="row">
              <div className=" col">
                {movie.Response !== "False" ? (
                  <div className="film-desc">
                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                    <>
                      <p>
                        <strong> Year:</strong> {movie.Year}
                      </p>
                      <p>
                        <strong>Duration: </strong> {movie.Runtime}
                      </p>
                      <p>
                        <strong>Genre: </strong> {movie.Genre}
                      </p>
                      <p>
                        <strong>Director: </strong> {movie.Director}
                      </p>
                      <p>
                        <strong>Awards: </strong> {movie.Awards}
                      </p>
                      <p>
                        <strong>imdbRating: </strong> {movie.imdbRating}
                      </p>
                    </>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col">
                <img src={movie.Poster} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="empty-search">
              <Carrousel />
            </div>
          </>
        )}
      </div>
      {movies.loading && <Spinner />}
    </Container>
  );
}
