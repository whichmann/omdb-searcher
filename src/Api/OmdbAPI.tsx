const getMovies = (movieTitle: string) =>
  fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=88e4957a`);

export default getMovies;
