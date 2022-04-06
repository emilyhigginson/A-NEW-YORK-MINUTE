import React from 'react'

function VisitedSpots({user, spotArray}) {

  const mySpots = spotArray.filter((spot) => 
  console.log(spot.reviews))

  // console.log(mySpots)
  return (
    <div>
      <h1> Spots you've visited and reviewed:  </h1>
      {mySpots}
    </div>
  )
}

export default VisitedSpots