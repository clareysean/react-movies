export function uniqueActors(movies) {
  // Extract all cast arrays from movies and join
  const actorsArray = movies.flatMap((movie) => movie.cast);

  const actorsSet = new Set(actorsArray);

  const uniqueActors = Array.from(actorsSet);

  return uniqueActors;
}

export function moviesWithActor(actor, movies) {
  const moviesWithActor = movies.filter((m) => new Set(m.cast).has(actor));
  console.log(moviesWithActor);
  return moviesWithActor;
}
