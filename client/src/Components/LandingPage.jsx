import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

function LandingPage() {
  const useStyles= makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: 'https://cdn.wallpapersafari.com/11/94/dzwtvk.jpg',
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'
    }

  }))
  return (
    <div className= ''>
        <h1>A NEW YORK MINUTE...</h1>
        <p>scroll to begin...</p>
    </div>
  )
}

export default LandingPage