import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { firebase } from '../firebase/firebase-config';
import { Header } from '../components/layout/Header';
import { JournalPage } from '../pages/private/journal/JournalPage';
import { HomePage } from '../pages/public/HomePage';
import { AuthRouter } from './auth/AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { LoadingScreen } from '../components/layout/LoadingScreen';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    firebase.auth().onAuthStateChanged( async (user) => {
      // console.log(user)
      if ( user?.uid ) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
        // Load Notes
        const notes = await loadNotes( user.uid );
        dispatch( setNotes(notes) );
        // Load Notes
      } else {
        setIsLoggedIn(false)
      }

      setChecking(false);

    });

  }, [dispatch, setChecking, isLoggedIn]);

  return (
    <Router>
      <Header/>
      {
        checking 
        ?
        <LoadingScreen/>
        :
        <Switch>
          <PublicRoute
            path="/auth"
            component={ AuthRouter }
            isAuthenticated={ isLoggedIn }
          />
          <PrivateRoute
            path="/dashboard"
            component={ JournalPage }
            isAuthenticated={ isLoggedIn }
          />
          <Route
            path="/"
            component={ HomePage }
          />
          <Redirect to="/auth/login"/>
        </Switch>
      }
    </Router>      
  )
}
