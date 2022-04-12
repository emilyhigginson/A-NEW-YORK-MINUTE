import React, {useEffect, useState} from 'react'
import FilterCard from './FilterCard'
import SpotCard from './SpotCard'

function FilterContainer({spots}) {
// const [spotId, setId] = useState("")
  const spotId = spots.map(spot=> spot.id)
  const [reviews, setReviews] = useState([])
  
  useEffect(()=> {
    fetch (`/reviews/${spotId}`)
    .then(res => res.json())
    .then(data => setReviews(data)) 
  }, [])
  // const  review= spots.reviews.map((review) => review)
const filteredSpots = spots.map(spot=>
   <SpotCard
    reviews={reviews} 
   key={spot.id} id={spot.id} name={spot.name} location={spot.location} category={spot.category} lat={spot.lat} lng={spot.lng} image={spot.image} /> )
   console.log(filteredSpots)
 
   return (
    <div>
        {filteredSpots}
    </div>
  )
}

export default FilterContainer