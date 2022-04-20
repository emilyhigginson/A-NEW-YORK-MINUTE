import React, { useState } from 'react'
import { NavLink, Link, Route } from "react-router-dom"

function Header({ onLogout, currentUser, setCurrentUser }) {

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })

    console.log(currentUser)
    setCurrentUser("")
  }
  return (
    <>
      <div className='navbar' >
        <Route>
          <NavLink id='link' exact to='/home'> A New York Minute  </NavLink>
          <NavLink id='links' exact to='/spots'> 🗽 Browse </NavLink>
          <NavLink id='links' exact to='/profile'>  🏙 Profile </NavLink>
          <NavLink id='links' exact to='/add'> 🥂 Add a Spot</NavLink>
          <NavLink id='links' exact to='/search'> 🚕 Search </NavLink>
        </Route>
        <button id='logout' onClick={handleLogout}>Logout </button>

      </div>

    </>
  )
}

export default Header