import React from 'react'
import Movie from './components/layout/Movie'
import Navbar from './components/layout/navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import Customers from './components/layout/Customer'
import Rentals from './components/layout/Rentals'
import NotFound from './components/layout/NotFound'
import MovieForm from './components/layout/MovieForm'
import Login from './components/layout/LoginForm'
import './App.css'
export default function App () {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/movies/:id' component={MovieForm} />
        <Route path='/movies' component={Movie} />
        <Route path='/customers' component={Customers} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/not-found' component={NotFound} />
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found' />
      </Switch>
    </>
  )
}
