import React from 'react'

export const NoteHeaderBar = () => {
  return (
    <div className="note__header-bar">
      <div className="note__header-bar--date">
        <p>25 de Marzo, 2020</p>
      </div>
      <div className="note__header-bar--buttons">
        <img style={{ width: "35px", marginRight: "15px" }} src="../assets/icons/button-image.svg" alt="button-image"/>
        <img style={{ width: "35px" }} src="../assets/icons/button-save.svg" alt="button-save"/>
      </div>
    </div>
  )
}
