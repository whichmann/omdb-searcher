const getMovies = (movieName: string) =>
  fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=88e4957a`)
    .then((response) => response.json())
    .then((data) => console.log(data));

export default getMovies;
