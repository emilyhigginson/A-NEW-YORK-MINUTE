import React from 'react'
import SpotCard from './SpotCard'
import Review from './Review'

function AllSpots({spotArray, user}) {

    
    const spots = spotArray.map((spot) => <SpotCard user={user} key={spot.id} name={spot.name} location={spot.location} category={spot.category} price={spot.price_range} walkin={spot.walk_in} image={spot.image} id={spot.id}/>)
  return (
    <div>{spots}</div>
  )
}

export default AllSpots