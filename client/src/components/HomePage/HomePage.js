import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../utils/api";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map(m => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
