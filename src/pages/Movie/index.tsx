import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import store from "../../store";
import { MovieActions } from "../../store/slices/movies";
import { Movie as MovieType } from "../../store/types";
import { Container } from "./styles";

export default function Movie() {
  // const {} = useSelector((state) => state.movies);

  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  // console.log(movies);
  const { movies } = store.getState();

  console.log(movies.loading);

  const dispatch = useDispatch();

  function fetchMovie(title: string, apiKey: string) {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
    return fetch(url).then((response) => response.json());
  }
  const [movie, setMovie] = useState<MovieType | null>(null);

  // useEffect(() => {
  //   const fetchAndSetMovie = async () => {
  //     const data = await fetchMovie("avatar", "8384263e");
  //     setMovie(data);
  //     dispatch(MovieActions.fetchMovieDataSuccess(data));
  //   };
  //   fetchAndSetMovie();
  // }, [dispatch]);

  function handleSearchButtonClick() {
    const apiKey = "8384263e";
    fetchMovie(searchValue, apiKey).then((data) => {
      setMovie(data);
      dispatch(MovieActions.fetchMovieDataSuccess(data));
    });
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
          {/* <td>
            <Button
              onClick={console.log("c")}
              variant="secondary"
              type="submit"
              text="Reset"
            ></Button>
          </td> */}
        </tr>
        {movie ? (
          <div>
            <div className="row">
              <div className="col">
                <h1>{movie.Title}</h1>
                <p>{movie.Plot}</p>
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
              </div>
              <div className="col">
                <img src={movie.Poster} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );

  // return (
  //   <div>
  //     <MyCard title="Meu título" text="Meu texto" hasButton={false} />
  //   </div>
  // );
}
