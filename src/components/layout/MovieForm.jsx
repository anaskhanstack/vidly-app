import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <>
      <h1>Movie {match.params.id}</h1>
      <button onClick={() => history.push("/movies")}>Save</button>
    </>
  );
};

export default MovieForm;
