export default function MovieCard({ posterPath, releaseDate, title, cast }) {
  return (
    <div className="movie-card">
      <img src={posterPath} alt="" />
      <h3>{title}</h3>
      <h4>{releaseDate}</h4>
      <label htmlFor="cast">Cast</label>
      <ul>
        {cast.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
