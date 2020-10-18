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
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { LoadingScreen } from '../components/layout/LoadingScreen';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    firebase.auth().onAuthStateChanged( (user) => {
      // console.log(user)
      if ( user?.uid ) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
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
      }
    </Router>      
  )
}
