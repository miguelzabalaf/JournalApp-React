import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BtnPrimary } from '../buttons/BtnPrimary';
import { BtnSecondary } from '../buttons/BtnSeconary';
import { ButtonMenu } from './ButtonMenu';
import { HeaderNavUser } from './HeaderNavUser';


export const Header = () => {

  const { uid, name, photoURL } = useSelector( state => state.auth )

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__container--logo" src="../assets/journal-logo.svg" alt="Logo Journal"></img>
        </Link>
        {
          !uid ?
            <nav className="navbar">
              <BtnSecondary navigateTo="/auth/login" text="Login" />
              <BtnPrimary navigateTo="/auth/register" text="Start Now" />
            </nav>
          :
            <HeaderNavUser name={ name } photoURL={ photoURL } />
        }
        <ButtonMenu/>
      </div>
    </header>
  )
}
