export default function MovieCard({ posterPath, releaseDate, title, cast }) {
  return (
    <div className="movie-card">
      <img className="card-img" src={posterPath} alt="" />
      <h2>{title}</h2>
      <h4>{releaseDate}</h4>
      <label htmlFor="cast">Cast</label>
      <ul className="cast-ul">
        {cast.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
