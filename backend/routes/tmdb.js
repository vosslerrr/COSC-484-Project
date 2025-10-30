const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjg5NjBjMGUwMjZmYzkzMDEyNWIzYjJlODUyYzk1YyIsIm5iZiI6MTc2MTc2NDY5MC45NDgsInN1YiI6IjY5MDI2NTUyYjY1OTAwODRmM2VlN2E4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.scwXm9HVzfcNtuCbSQPH9vUNvUPRAy5i1sK-ipiP5FI'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));