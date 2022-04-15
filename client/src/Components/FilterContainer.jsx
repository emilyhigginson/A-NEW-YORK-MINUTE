import React, {useEffect, useState} from 'react'
import FilterCard from './FilterCard'
import SpotCard from './SpotCard'

function FilterContainer({spots, user}) {
  const spotId = spots.map(spot=> spot.id)
  const [reviews, setReviews] = useState([])
  
  useEffect(()=> {
    fetch (`/reviews/${spotId}`)
    .then(res => res.json())
    .then(data => setReviews(data)) 
  }, [])

  const filteredSpots = spots.map(spot=>
   <SpotCard
    reviews={reviews} 
   key={spot.id} spot_id={spot.id} name={spot.name} user={user} location={spot.location} category={spot.category} lat={spot.lat} lng={spot.lng} image={spot.image} /> )
 
   return (
    <div>
        {filteredSpots}
    </div>
  )
}

export default FilterContainer