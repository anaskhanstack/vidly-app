import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { genres } from "../../services/fakeGenreService";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
    margin: 0,
    maxWidth: 300,
    border: "1px solid #f0f2f1",
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function ListGroup({ handleGenreChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem button divider={true}>
          <ListItemText
            style={{ textAlign: "center" }}
            primary="All"
            onClick={() => handleGenreChange("All")}
          />
        </ListItem>
        {genres.map((genre, i) => (
          <ListItem button divider={true} key={genre._id}>
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
