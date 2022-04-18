import React, {useState} from 'react'
import SpotCard from './SpotCard'

function AllSpots({ spotArray, user }) {

  const spots = spotArray.map((spot) => <SpotCard reviews={spot.reviews} spot={spot} user={user} key={spot.id} name={spot.name} lat={spot.lat} lng={spot.lng} location={spot.location} category={spot.category} image={spot.image} id={spot.id} />)
  return (
    <div className='allSpots'>
<div className='allSpotsHeader'>
      <h1 id='spotsHeader'> OUR USERS' FAVORITE <br></br> SPOTS IN NYC  </h1>
      </div>
      {spots}
      </div>
  )
}

export default AllSpots