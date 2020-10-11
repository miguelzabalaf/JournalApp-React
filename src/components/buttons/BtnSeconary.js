import React from 'react'
import {
  Link
} from "react-router-dom";

export const BtnSecondary = ({ navigateTo, text }) => {
  return (
    <Link className="btnsecondary" to={ navigateTo }>{ text }</Link>
  )
}
