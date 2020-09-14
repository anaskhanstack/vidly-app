import React from "react";
import Movie from "./components/Movie";
import Navbar from "./components/layout/navbar";
import { Switch, Route } from "react-router-dom";
import Customers from "./components/Customer";
import Rentals from "./components/Rentals";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/Rentals" component={Rentals} />
        <Route path="/Customers" component={Customers} />
        <Route path="/" component={Movie} />
      </Switch>
    </>
  );
}
