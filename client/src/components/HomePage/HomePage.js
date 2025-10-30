import React, { useEffect, useState } from "react";
import { getMoviePoster, getPopularMovies } from "../../utils/api";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(data => setMovies(data.results));
  }, []);

  useEffect(() => {
    Promise.all(
      movies.map(movie => getMoviePoster(movie.id))
    )
      .then(allImages => setImages(allImages));
  }, [movies]);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((m, index) => (
          <li key={m.id}>
            {images[index]?.posters?.[0] && (
              <img src={`https://image.tmdb.org/t/p/w500${images[index].posters[0].file_path}`}/>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
