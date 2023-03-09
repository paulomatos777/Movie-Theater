import { useState } from "react";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Spinner from "../../components/Spinner";
import store from "../../store";
import { MovieActions } from "../../store/slices/movies";
import { Movie as MovieType } from "../../store/types";
import { Container } from "./styles";
import menu from "../../assets/logo-menu.jpg";

export default function Movie() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const { movies } = store.getState();

  const dispatch = useDispatch();

  function fetchMovie(title: string, apiKey: string) {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
    toast.success("Filme Encontrado");
    return fetch(url).then((response) => response.json());
  }
  const [movie, setMovie] = useState<MovieType | null>(null);

  function handleSearchButtonClick() {
    const apiKey = "8384263e";
    fetchMovie(searchValue, apiKey).then((data) => {
      setMovie(data);
      dispatch(MovieActions.fetchMovieDataSuccess(data));
      toast.success("Filme Encontrado");
    });
    if (movie?.Response === "True") {
      toast.success("Filme Encontrado");
    }
  }

  return (
    <Container>
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
                  <h6 className="error-msg">
                    movie not found, please try with another title{" "}
                  </h6>
                )}
              </div>
              <div className="col">
                <img src={movie.Poster} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <h6 className="empty-search">None movies searched yet</h6>
          </>
        )}
      </div>
      {movies.loading && <Spinner />}
    </Container>
  );
}
