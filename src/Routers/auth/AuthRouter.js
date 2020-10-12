import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from '../../pages/public/auth/LoginPage'
import { RegisterPage } from '../../pages/public/auth/RegisterPage'

export const AuthRouter = () => {
  return (
    <div className="auth">
      <div className="auth__box-container">
        <Route 
          path="/auth/login"
          exact
          component={ LoginPage }
        />
        <Route 
          path="/auth/register"
          exact 
          component={ RegisterPage }
        />
        <Redirect 
          to="/auth/login"
        />
      </div>
    </div>
  )
}
