import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="main__container--card">
      <div className="journalentry">
        <div className="journalentry__picture">
        <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/04/20/10/shutterstock-269227808.jpg" alt="galaxt"/>
        </div>
        <div className="journalentry__info">
          <h3 className="journalentry__info--title">Earth</h3>
          <p className="journalentry__info--date">25 de Marzo, 2020</p>
          <p className="journalentry__info--abstract">This is a little fragment about this entry...</p>
        </div>
      </div>
    </div>
  )
}
