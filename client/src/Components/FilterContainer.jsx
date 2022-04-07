import React, {useEffect, useState} from 'react'
import FilterCard from './FilterCard'

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
const filteredSpots = spots.map(spot=> <FilterCard reviews={reviews} key={spot.id} id={spot.id} name={spot.name} location={spot.location} category={spot.category} price={spot.price_range} walkin={spot.walk_in} image={spot.image} /> )
console.log(reviews)
    return (
    <div>
        {filteredSpots}
    </div>
  )
}

export default FilterContainer