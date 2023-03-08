import { useEffect, useState } from "react";
import MyCard from "../../components/Card";
import api from "../../services/api";

export default function Movie() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await api.get("/movie?title=skyfall&apikey=8384263e");
        setMovie(data);
        console.log("dados:", data);
      } catch {
        // continue
      }
    }
    if (Object.keys(movie).length === 0) {
      fetchMovie();
    }
  }, [movie]);

  return (
    <div>
      <MyCard title="Meu título" text="Meu texto" hasButton={false} />
    </div>
  );
}
