import React from 'react'
import {
  Link
} from "react-router-dom";

export const BtnPrimary = ({ navigateTo, text }) => {
  return (
    <Link className="btnprimary" to={ navigateTo }>{ text }</Link>
  )
}
