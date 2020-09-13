import React from "react";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
const Like = ({ movie, handleLike }) => {
  return movie.like ? (
    <Favorite onClick={() => handleLike(movie)} />
  ) : (
    <FavoriteBorder onClick={() => handleLike(movie)} />
  );
};

export default Like;
