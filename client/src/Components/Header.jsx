import React from 'react'
import { NavLink, Route} from "react-router-dom"

function Header() {
  return (
    <div style={{ "backgroundColor": "transparent"}}>
        <Route>
        <NavLink exact to='/login'>Login </NavLink>
        <NavLink exact to='/spots'>Spots </NavLink>
        <NavLink exact to='/home'>Home </NavLink>
        <NavLink exact to='/me'>My Spots </NavLink>
        <NavLink exact to='/add'>Add a Spot</NavLink>

        <NavLink exact to='/'>Search </NavLink>
        </Route>

    </div>
  )
}

export default Header