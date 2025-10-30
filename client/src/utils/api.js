export async function getPopularMovies() {
  const res = await fetch("http://localhost:5000/api/movies/popular");
  return res.json();
}

export async function getMoviePoster(movie_id){
    const res = await fetch(`http://localhost:5000/api/movies/${movie_id}/images`);
    return res.json();
}