import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";
import { movies } from "../../data";

export default function MovieListPage() {
  return movies.map((m, i) => (
    <Link to={`/movie/${i}`} key={i}>
      <MovieCard {...m} />
    </Link>
  ));
}

// spread all the properties of each movie object and pass to card like this {...m}
