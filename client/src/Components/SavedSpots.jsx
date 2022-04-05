import React from 'react'
import SavedCard from './SavedCard'

function SavedSpots({spots}) {

  // const savedSpots = spots.map(spot=> <SavedCard key={spot.id} name={spot.name} location={spot.location} category={spot.category} price={spot.price_range} walkin={spot.walk_in} image={spot.image}/>)

  return (
    <div>
      {/* {savedSpots} */}
      <h1> Here are the spots you've saved:</h1>
    </div>
  )
}

export default SavedSpots