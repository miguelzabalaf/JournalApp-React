import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Header } from '../components/layout/Header';
import { JournalPage } from '../pages/private/journal/JournalPage';
import { HomePage } from '../pages/public/HomePage';
import { AuthRouter } from './auth/AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route
          path="/auth"
          component={ AuthRouter }
        />
        <Route
          path="/dashboard"
          component={ JournalPage }
        />
        <Route
          path="/"
          component={ HomePage }
        />
        <Redirect to="/auth/login"/>
      </Switch>
    </Router>      
  )
}
