import React from 'react'

export const FormHeader = ({ title }) => {
  return (
    <div className="FormHeader">
    <h2 className="j-title">{ title }</h2>
    <img src="../assets/logo.svg" alt="Journal-logo" />
  </div>
  )
}
