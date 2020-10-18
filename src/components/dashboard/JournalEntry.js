import React from 'react'

export const JournalEntry = ({ title, body, date }) => {
  return (
    <div className="main__container--card">
      <div className="journalentry">
        <div className="journalentry__picture">
        <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/04/20/10/shutterstock-269227808.jpg" alt="galaxt"/>
        </div>
        <div className="journalentry__info">
          <h3 className="journalentry__info--title">{ title }</h3>
          <p className="journalentry__info--date">{ date }</p>
          <p className="journalentry__info--abstract">{ body }</p>
        </div>
      </div>
    </div>
  )
}
