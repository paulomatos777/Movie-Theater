import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieActions } from "../../store/slices/movies";
// import MyCard from "../../components/Card";
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
      const data = await fetchMovie("skyfall", "8384263e");
      setMovie(data);
      dispatch(MovieActions.fetchMovieDataSuccess(data));
    };
    fetchAndSetMovie();
  }, [dispatch]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <img src={movie.Poster} alt="" />
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
