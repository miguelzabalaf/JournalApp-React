import React from 'react'

export const NoteHeaderBar = () => {
  return (
    <div className="note__header-bar">
      <div className="note__header-bar--date">
        <p>20 de Marzo, 2020</p>
      </div>
      <div className="note__header-bar--buttons">
        <img style={{ width: "20px", marginRight: "25px" }} src="../assets/icons/button-image.svg" alt="button pic"/>
        <img style={{ width: "20px" }} src="../assets/icons/button-save.svg" alt="save"/>
      </div>
    </div>
  )
}
