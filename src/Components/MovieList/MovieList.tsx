import React from "react";
import { OmdbResponseModel } from "./../../App";

type Props = {
  movieList: OmdbResponseModel;
};

const MovieList = ({ movieList }: Props) => {
  console.log(movieList.movies);
  if (movieList.isError) {
    return <p>{movieList.errorMessage}</p>;
  }
  return (
    <ul>
      {movieList.movies.map((movie) => (
        <li key={movie.Title}>{movie.Title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
