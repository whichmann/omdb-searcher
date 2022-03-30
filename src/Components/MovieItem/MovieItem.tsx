import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./MovieItem.css";
import { MovieItemModel } from "./../../App";

const MovieItem = ({ Title, Year, Poster }: MovieItemModel) => (
  <Grid item xs={12} md={6} xl={4}>
    <Card className="item-container" elevation={2}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {Title}
        </Typography>
        <Typography variant="body2">{Year}</Typography>
      </CardContent>
      <img src={Poster} height={620} alt={`${Title} - movie released on ${Year}`}></img>
    </Card>
  </Grid>
);

export default MovieItem;
