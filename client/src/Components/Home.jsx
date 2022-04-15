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
        <h3> Ready to go? <br>
        </br>Click to find something to do ASAP. </h3>
        </div>
    </NavLink> 
    <NavLink id='homeLink' exact to='/profile'>
        <div className='homeDiv'>
        {/* <img style={{"width": "300px"}} src='https://i.etsystatic.com/6628690/r/il/4d9477/1814633811/il_340x270.1814633811_3l8o.jpg'></img> */}
        <h3> Not heading out just yet? <br>
        </br> See your profile. </h3>
        </div>
        </NavLink>
        <NavLink id='homeLink' exact to='/add'>
        <div className='homeDiv'>
        {/* <img style={{"width": "300px"}} src='https://i.etsystatic.com/6628690/r/il/4d9477/1814633811/il_340x270.1814633811_3l8o.jpg'></img> */}
        <h3> Find somewhere new? Add it here. <br>
        </br>  </h3>
        </div>
        </NavLink>
    </div>
</div>
  )
}

export default Home