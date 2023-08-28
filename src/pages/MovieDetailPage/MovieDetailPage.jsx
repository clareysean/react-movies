import { useParams } from "react-router-dom";
import { movies } from "../../data";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieDetailPage() {
  const { id } = useParams();
  const m = movies[id];
  return <MovieCard {...m} />;
}
