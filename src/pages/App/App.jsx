import { useState } from "react";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import MovieListPage from "../MoviesListPage/MoviesListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorDetailPage from "../ActorDetailPage/ActorDetailPage";

import { Routes, Route } from "react-router-dom";
import ActorListPage from "../ActorListPage/ActorListPage";

function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/actors" element={<ActorListPage />} />
          <Route path="/actor/detail" element={<ActorDetailPage />} />
          {/* <Route path="/actor/:id" element={<ActorDetailPage />} /> */}
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}

export default App;
