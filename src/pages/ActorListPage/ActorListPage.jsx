import React from "react";
import { Link } from "react-router-dom";
import uniqueActors from "../../utilities/data-helper.js";
import { movies } from "../../data.js";

export default function ActorListPage() {
  const actors = uniqueActors(movies);

  return (
    <div>
      <h1>List of Unique Actors</h1>
      <ul>
        {actors.map((actor, i) => (
          <Link to={`/actor/${i}`} key={i}>
            <li key={i}>{actor}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
