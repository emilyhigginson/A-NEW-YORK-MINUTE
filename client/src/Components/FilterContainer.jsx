import React from 'react'
import FilterCard from './FilterCard'

function FilterContainer({spots}) {

    const filteredSpots = spots.map(spot=> <FilterCard key={spot.id} name={spot.name} location={spot.location} category={spot.category} price={spot.price_range} walkin={spot.walk_in} image={spot.image}/>)
  return (
    <div>
        {filteredSpots}
    </div>
  )
}

export default FilterContainer