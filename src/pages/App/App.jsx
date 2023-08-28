import { useState } from "react";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import MovieListPage from "../MoviesListPage/MoviesListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";

import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/actor/:id" element={<ActorDetailPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}

export default App;
