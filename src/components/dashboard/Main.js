import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../actions/notes'
import { Note } from '../notes/Note'
import { JournalEntries } from './JournalEntries'

export const Main = () => {

  const dispatch = useDispatch();

  const { name } = useSelector(state => state.auth);

  const handleAddNewEntry = () => {
    dispatch(startNewNote());
  }

  return (
    <div className="main">
      <h3 className="main__title">Your recent posts <strong>{ name }</strong></h3>
      <img 
        className="main__button-plus"
        src="../assets/icons/button-plus.svg"
        alt="icon-plus"
        onClick={ handleAddNewEntry }
        />
      <JournalEntries/>
      <main>
        <Note/>
      </main>
    </div>
  )
}