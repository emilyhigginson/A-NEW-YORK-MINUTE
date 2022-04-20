import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {

  return (
    <div className='homepage'>
      <h1 style={{ color: 'white' }} id='homeHeader'>SO MUCH TO DO, SO LITTLE TIME.</h1>
      <div className='homeContainer'>
        <NavLink id='homeLink' exact to='/search'>
          <div className='homeDiv'>
            <h3> READY TO GO? <br>
            </br>Click to find something to do ASAP.
              🚕 </h3>
          </div>
        </NavLink>
        <NavLink id='homeLink' exact to='/profile'>
          <div className='homeDiv'>
            <h3> HERE FOR A MINUTE? <br>
            </br> Check out your <br></br> profile. <br></br>
              🏙 </h3>
          </div>
        </NavLink>
        <NavLink id='homeLink' exact to='/add'>
          <div className='homeDiv'>
            <h3> FIND SOMEWHERE NEW? <br></br> Add it here. <br>
            </br> 🥂 </h3>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Home