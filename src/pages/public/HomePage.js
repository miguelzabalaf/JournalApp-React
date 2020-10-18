import React from 'react'
import { useSelector } from 'react-redux'
import { BtnPrimary } from '../../components/buttons/BtnPrimary'

export const HomePage = () => {

  const { uid } = useSelector(state => state.auth)

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__container--title"><span>What is the new</span><br/><span>today?</span></h1>
          <div className="hero__container--bar"></div>
          {
            uid ?
            <BtnPrimary navigateTo="/dashboard" text="Go Dashboard" />
            :
            <BtnPrimary navigateTo="/auth/register" text="Start Now" />
          }
          <img className="hero__container--img" src="./assets/person-surprised.png" alt="Journal-Person-Surprised" />
        </div>
      </div>
    </>
  )
}
