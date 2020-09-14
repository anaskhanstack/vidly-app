import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@material-ui/core";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import PagePagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";

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

const Movie = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState("");
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePage, setMoviePage] = useState();

  const { length: count } = movies;

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const handleDelete = (_id) => {
    const newMovies = movies.filter((m) => m._id !== _id);
    setMovies(newMovies);
  };

  const handleLike = (movie) => {
    const addedMovie = [...movies];
    const index = addedMovie.indexOf(movie);

    movie.like
      ? (addedMovie[index].like = false)
      : (addedMovie[index].like = true);
    setMovies(addedMovie);
  };

  const handleGenreChange = (genre) => {
    if (genre === "All") {
      const movieList = paginate(movies, currentPage, pageSize);
      setMoviePage(movieList);
    } else {
      const movieList = movies.filter((movie) => movie.genre.name === genre);
      setMoviePage(movieList);
    }
  };
  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
    const movieList = paginate(movies, currentPage, pageSize);
    setMoviePage(movieList);
  };

  if (count === 0) {
    return <p>There are no movies in the database.</p>;
  }
  if (!moviePage) {
    setMoviePage(paginate(movies, currentPage, pageSize));
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid xs={3} className={classes.control} item>
          <ListGroup handleGenreChange={handleGenreChange} />
        </Grid>
        <Grid xs={7} item>
          <p>Showing {count} movies in the database</p>
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

              {typeof moviePage === "object"
                ? moviePage.map((movie) => (
                    <TableBody key={movie._id}>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {movie.title}
                        </TableCell>
                        <TableCell align="right">{movie.genre.name}</TableCell>
                        <TableCell align="right">
                          {movie.numberInStock}
                        </TableCell>
                        <TableCell align="right">
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
          <PagePagination
            handlePageChange={handlePageChange}
            itemCount={count}
            pageSize={pageSize}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Movie;
