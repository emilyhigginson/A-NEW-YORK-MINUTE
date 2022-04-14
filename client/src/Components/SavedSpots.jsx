import React, { useEffect, useState } from 'react'
import SavedCard from './SavedCard'

function SavedSpots({user, setReviews, reviews, spotArray, handleDelete}) {

const [mySaved, setMySaved] = useState([])

  useEffect(()=> {
    fetch('/favorites')
    .then(res=>res.json())
    // .then(data=> console.log(data))
    .then(data=> setMySaved(data))
  }, [])
// console.log(mySaved)

function handleDelete(id) {
  fetch(`/favorites/${id}`, {
    
    method: "DELETE",
    
  }).then((r) => {
    if (r.ok) {
      setMySaved((saved) =>
        saved.filter((saved) => saved.id !== id)
      );
    }
  });
}
// console.log(mySaved)
const favs = mySaved.map((spot) => <SavedCard setReviews={setReviews} reviews={reviews} handleDelete= {handleDelete} user_id={user.id} key={spot.id} name={spot.spot_name} location={spot.spot_location} category={spot.spot_category} image={spot.spot_image} id={spot.id} lat={spot.lat} lng={spot.lng}/>)
  return (
    <div>
    <h1> Here are the spots you've saved:</h1>
    <div className='savedContainer'>
{favs} 
</div>
    </div>
  )
}

export default SavedSpots