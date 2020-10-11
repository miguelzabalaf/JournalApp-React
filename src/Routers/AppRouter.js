import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from '../components/layout/Header';
import { HomePage } from '../pages/public/HomePage';
import { AuthRouter } from './auth/AuthRouter';

export const AppRouter = () => {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route
          path="/auth"
          component={ AuthRouter }
        />
        <Route
          path="/"
          exact component={ HomePage }
        />
        <Redirect 
          to="/"
        />
      </Switch>
    </Router>
    </>
  )
}
