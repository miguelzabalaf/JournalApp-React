import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const ButtonLogout = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <div onClick={ handleLogout } className="buttonlogut">
      <img src="../assets/icons/button-logout.svg" alt="logout" />
    </div>
  )
}
