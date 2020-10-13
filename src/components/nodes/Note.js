import React from 'react'
import { NoteHeaderBar } from './NoteHeaderBar'

export const Note = () => {
  return (
    <div className="note">
      <NoteHeaderBar/>
      <div className="note__content">
        <input
          type="text"
          placeholder="Post title"
          autoComplete="off"
          className="note__content--input"
        />
        <textarea
          placeholder="What happened today?"
          className="note__content--textarea"
          autoComplete="off"
          cols="5"
          rows="12"
          maxLength="1000"
          minLength="5"
        >
        </textarea>
        </div>
        <div className="note__image">
          <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/04/20/10/shutterstock-269227808.jpg" alt="earth"/>
        </div>
    </div>
  )
}
