import React from 'react'
import { Link } from 'react-router-dom';
import { BtnPrimary } from '../buttons/BtnPrimary';
import { BtnSecondary } from '../buttons/BtnSeconary';
import { ButtonMenu } from './ButtonMenu';


export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__container--logo" src="../assets/journal-logo.svg" alt="Logo Journal"></img>
        </Link>
        <nav className="navbar">
          <BtnSecondary navigateTo="/auth/login" text="Login" />
          <BtnPrimary navigateTo="/auth/register" text="Start Now" />
        </nav>
        <ButtonMenu/>
      </div>
    </header>
  )
}
