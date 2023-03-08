import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import { MovieActions } from "../../store/slices/movies";
import { Movie as moviee, MovieState } from "../../store/types";

export default function Movie() {
  const movies = useSelector((state: { movies: MovieState }) => state.movies);

  console.log(movies);
  const dispatch = useDispatch();

  function fetchMovie(title: string, apiKey: string) {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
    return fetch(url).then((response) => response.json());
  }
  const [movie, setMovie] = useState<moviee | null>(null);

  useEffect(() => {
    const fetchAndSetMovie = async () => {
      const data = await fetchMovie("avatar", "8384263e");
      setMovie(data);
      dispatch(MovieActions.fetchMovieDataSuccess(data));
    };
    fetchAndSetMovie();
  }, [dispatch]);

  return (
    <div>
      <Input variant="primary" type="submit" text="Search" />

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
  );

  // return (
  //   <div>
  //     <MyCard title="Meu título" text="Meu texto" hasButton={false} />
  //   </div>
  // );
}
