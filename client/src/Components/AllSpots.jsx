import React from 'react'
import SpotCard from './SpotCard'

function AllSpots({spotArray}) {

    
    const spots = spotArray.map((spot) => <SpotCard key={spot.id} name={spot.name} location={spot.location} category={spot.category} price={spot.price_range} walkin={spot.walk_in} image={spot.image}/>)
  return (
    <div>{spots}</div>
  )
}

export default AllSpots