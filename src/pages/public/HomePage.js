import React from 'react'
import { BtnPrimary } from '../../components/buttons/BtnPrimary'

export const HomePage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__container--title"><span>What is the new</span><br/><span>today?</span></h1>
          <div className="hero__container--bar"></div>
          <BtnPrimary navigateTo="/auth/register" text="Start Now" />
          <img className="hero__container--img" src="./assets/person-surprised.png" alt="Journal-Person-Surprised" />
        </div>
      </div>
    </>
  )
}
