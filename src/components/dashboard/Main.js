import React from 'react'
import { Note } from '../nodes/Note'
import { JournalEntries } from './JournalEntries'
// import { NothingSelected } from './NothingSelected'

export const Main = () => {
  return (
    <div className="main">
      <h3 className="main__title">Your recent posts <strong>Miguel</strong></h3>
      <img className="main__button-plus" src="../assets/icons/button-plus.svg" alt="icon-plus"/>
      <JournalEntries/>
      <main>
        {/* <NothingSelected/> */}
        <Note/>
      </main>
    </div>
  )
}
