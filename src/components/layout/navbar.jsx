import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h6" style={{ marginRight: 10 }}>
          Vidly
        </Typography>

        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Button color="inherit">Movies</Button>
        </Link>

        <Link
          to="/customers"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button color="inherit">Customer</Button>
        </Link>
        <Link to="/rentals" style={{ color: "white", textDecoration: "none" }}>
          <Button color="inherit">Rentals</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
