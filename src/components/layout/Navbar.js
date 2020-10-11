import React from 'react'
import { BtnPrimary } from '../buttons/BtnPrimary'
import { BtnSecondary } from '../buttons/BtnSeconary'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <BtnSecondary navigateTo="/auth/login" text="Login" />
      <BtnPrimary navigateTo="/auth/register" text="Start Now" />
    </nav>
  )
}
