import React from 'react'
import { useSelector } from 'react-redux'
import { Note } from '../nodes/Note'
import { JournalEntries } from './JournalEntries'
// import { NothingSelected } from './NothingSelected'

export const Main = () => {

  const { name } = useSelector(state => state.auth)

  return (
    <div className="main">
      <h3 className="main__title">Your recent posts <strong>{ name }</strong></h3>
      <img className="main__button-plus" src="../assets/icons/button-plus.svg" alt="icon-plus"/>
      <JournalEntries/>
      <main>
        {/* <NothingSelected/> */}
        <Note/>
      </main>
    </div>
  )
}
