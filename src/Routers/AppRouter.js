import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomePage } from '../pages/public/HomePage';
import { AuthRouter } from './auth/AuthRouter';

export const AppRouter = () => {
  return (
    <>
    <Router>
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
