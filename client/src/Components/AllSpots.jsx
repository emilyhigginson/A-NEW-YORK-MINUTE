import React, {useState} from 'react'
import SpotCard from './SpotCard'

function AllSpots({ spotArray, user }) {

  const [mySaved, setMySaved] = useState([])


  const spots = spotArray.map((spot) => <SpotCard reviews={spot.reviews} spot={spot} user={user} key={spot.id} name={spot.name} lat={spot.lat} lng={spot.lng} location={spot.location} category={spot.category} image={spot.image} id={spot.id} />)
  return (
    <div className='allSpots'>
      <h2> A complete list of  </h2>
      {spots}
      </div>
  )
}

export default AllSpots