import React from 'react'
import {NavLink} from 'react-router-dom'

function Home() {

  return (
    <div className='homepage'>
    
    <h1 style={{color: 'white'}} id='homeHeader'>SO MUCH TO DO, SO LITTLE TIME.</h1>
    

    <div className='homeContainer'>
      
    <NavLink id='homeLink' exact to='/search'> 
    <div className='homeDiv'>
        {/* <img  style={{"width": "300px"}} src='https://previews.123rf.com/images/hchjjl/hchjjl1503/hchjjl150301916/37316845-taxi-doodle-drawing.jpg'></img> */}
        <h3> READY TO GO? <br>
        </br>Click to find something to do ASAP. 
        🚕 </h3>

        </div>
    </NavLink> 
    <NavLink id='homeLink' exact to='/profile'>
        <div className='homeDiv'>
        {/* <img style={{"width": "300px"}} src='https://i.etsystatic.com/6628690/r/il/4d9477/1814633811/il_340x270.1814633811_3l8o.jpg'></img> */}
        <h3> HERE FOR A MINUTE? <br>
        </br> Check out your <br></br> profile. <br></br>
        🏙 </h3>
        </div>
        </NavLink>
        <NavLink id='homeLink' exact to='/add'>
        <div className='homeDiv'>
        {/* <img style={{"width": "300px"}} src='https://i.etsystatic.com/6628690/r/il/4d9477/1814633811/il_340x270.1814633811_3l8o.jpg'></img> */}
        <h3> FIND SOMEWHERE NEW? <br></br> Add it here. <br>
        </br> 🥂 </h3>
        </div>
        </NavLink>
    </div>
</div>
  )
}

export default Home