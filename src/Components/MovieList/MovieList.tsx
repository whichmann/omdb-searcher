import React from "react";
import Grid from "@mui/material/Grid";

import "./MovieList.css";
import MovieItem from "./../MovieItem/MovieItem";
import { MoviesData } from "./../../App";

type Props = {
  movieList: MoviesData;
};

const MovieList = ({ movieList }: Props) => {
  if (movieList.isError) {
    return <p>{movieList.errorMessage}</p>;
  }
  return (
    <Grid container spacing={3} paddingTop={2}>
      {movieList.movies.map((movie, index) => (
        <MovieItem key={index} {...movie}></MovieItem>
      ))}
    </Grid>
  );
};

export default MovieList;
