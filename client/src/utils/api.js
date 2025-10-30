export async function getPopularMovies() {
  const res = await fetch("http://localhost:5000/api/movies/popular");
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}
