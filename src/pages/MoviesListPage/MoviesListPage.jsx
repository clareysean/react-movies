import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";
import { movies } from "../../data";

export default function MovieListPage() {
  return (
    <>
      <h1>MOVIE DB</h1>
      {movies.map((m, i) => (
        <Link to={`/movie/${i}`} key={i}>
          <MovieCard {...m} />
        </Link>
      ))}
    </>
  );
}
