import { movies } from "../../data";
import { moviesWithActor } from "../../utilities/data-helper.js";
import { useLocation } from "react-router-dom";

export default function ActorDetailPage(props) {
  const location = useLocation();
  const { actorName } = location.state;
  const actorMovies = moviesWithActor(actorName, movies);
  //   console.log(actorMovies);
  return (
    <div>
      <h1>{actorName}</h1>
      <h5>Appears in:</h5>
      <ul>
        {actorMovies.map((m) => (
          <li>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}
