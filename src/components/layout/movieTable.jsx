import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Like from "../common/like";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
  control: {
    padding: theme.spacing(1),
    marginTop: "3.1%",
  },
}));
const MovieTable = (props) => {
  const classes = useStyles();

  const { movies, handleDelete, handleLike } = props;

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
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        {typeof movies === "object"
          ? movies.map((movie) => (
              <TableBody key={movie._id}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                  </TableCell>
                  <TableCell align="right">
                    <Link></Link>
                    {movie.genre.name}
                  </TableCell>
                  <TableCell align="right">
                    <Link></Link>
                    {movie.numberInStock}
                  </TableCell>
                  <TableCell align="right">
                    <Link></Link>
                    {movie.dailyRentalRate}
                  </TableCell>
                  <TableCell align="right">
                    <Like handleLike={handleLike} movie={movie} />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(movie._id)}
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

export default MovieTable;
