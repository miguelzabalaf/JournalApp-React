import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { LoginPage } from '../../pages/public/LoginPage'
import { RegisterPage } from '../../pages/public/RegisterPage'

export const AuthRouter = () => {
  return (
    <div className="auth">
      <div className="auth__box-container">
        <Switch>
          <Route 
            exact
            path="/auth/login"
            component={ LoginPage }
          />
          <Route 
            exact
            path="/auth/register"
            component={ RegisterPage }
          />
          <Redirect to="/auth/login"/>
        </Switch>
      </div>
    </div>
  )
}
