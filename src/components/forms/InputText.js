import React from 'react'

export const InputText = ({ type, placeholder, name, autocomplete, value, onChange }) => {
  return (
    <input 
    className="input-text"
      type={ type }
      placeholder={ placeholder }
      name={ name }
      autoComplete={ autocomplete }
      value={ value }
      onChange={ onChange }
    />
  )
}
