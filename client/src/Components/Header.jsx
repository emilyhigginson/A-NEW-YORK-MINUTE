import React, {useState} from 'react'
import { NavLink, Link, Route} from "react-router-dom"

function Header({ onLogout }) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
  return (
    <>
    <div className='navbar' >
  

        <Route>
        <NavLink id='link' exact to='/home'>  <h2> New York Minute </h2> </NavLink>
        <NavLink id='links' exact to='/spots'>Spots </NavLink>
        <NavLink id='links' exact to='/me'>My Spots </NavLink>
        <NavLink id='links' exact to='/add'>Add a Spot</NavLink>
        <NavLink id='links' exact to='/search'>Search </NavLink>
        </Route>
        <button onClick={handleLogout}>Logout </button>

    </div>

    </>
  )
}

export default Header