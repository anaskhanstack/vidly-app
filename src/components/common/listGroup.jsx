import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { genres } from "../../services/fakeGenreService";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
    margin: 0,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListGroup({ handleGenreChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folder">
        {genres.map((genre, i) => (
          <ListItem button divider={true} key={i}>
            <ListItemText
              style={{ textAlign: "center" }}
              primary={`${genre.name}`}
              onClick={() => handleGenreChange(genre.name)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
