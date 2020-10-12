import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonMenu } from './ButtonMenu';
import { Navbar } from './Navbar';


export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__container--logo" src="./assets/journal-logo.svg" alt="Logo Journal"></img>
        </Link>
        <Navbar/>
        <ButtonMenu/>
      </div>
    </header>
  )
}
