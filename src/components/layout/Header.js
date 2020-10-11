import React from 'react'
import '../../../public/assets/journal-logo.svg';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
          <img className="header__container--logo" src="./assets/journal-logo.svg" alt="Logo Journal"></img>
          <Navbar/>
      </div>
    </header>
  )
}
