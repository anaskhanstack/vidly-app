import React, { useEffect, useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Movie = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState("");

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const handleDelete = (_id) => {
    const newMovies = movies.filter((m) => m._id !== _id);
    setMovies(newMovies);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Genre</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Stock</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Rate</strong>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        {typeof movies === "object"
          ? movies.map((row) => (
              <TableBody key={row._id}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.genre.name}</TableCell>
                  <TableCell align="right">{row.numberInStock}</TableCell>
                  <TableCell align="right">{row.dailyRentalRate}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          : null}
      </Table>
    </TableContainer>
  );
};

export default Movie;
