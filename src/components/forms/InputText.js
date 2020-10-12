import React from 'react'

export const InputText = ({ type, placeholder, name, autocomplete }) => {
  return (
    <input 
    className="input-text"
      type={ type }
      placeholder={ placeholder }
      name={ name }
      autoComplete={ autocomplete }
    />
  )
}
