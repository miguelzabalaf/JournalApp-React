import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from '../../pages/public/auth/LoginPage'
import { RegisterPage } from '../../pages/public/auth/RegisterPage'

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route 
          path="/auth/login"
          component={ LoginPage }
        />
        <Route 
          path="/auth/register"
          exact component={ RegisterPage }
        />
        <Redirect 
          to="/auth/register"
        />
      </Switch>
    </div>
  )
}
