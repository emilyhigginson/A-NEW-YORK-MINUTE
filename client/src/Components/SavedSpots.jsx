import React, { useEffect, useState } from 'react'
import SavedCard from './SavedCard'

function SavedSpots({user, setReviews, reviews, spotArray, handleDelete, reviewArray, onReviewSubmit}) {

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
console.log(user.favorite_spots)
const favoritos = user.favorite_spots 

console.log(favoritos)

// console.log(mySaved)
const favs = mySaved.map((spot) => <SavedCard setReviews={setReviews} onReviewSubmit={onReviewSubmit} reviews={reviews} handleDelete= {handleDelete} user_id={user.id} key={spot.id} name={spot.spot_name} location={spot.spot_location} category={spot.spot_category} image={spot.spot_image} id={spot.spot_id} lat={spot.spot_lat} lng={spot.spot_lng} />)

// const favs = favoritos.map((spot) => <SavedCard setReviews={setReviews} reviews={reviews} handleDelete= {handleDelete} user_id={user.id} key={spot.id} name={spot.name} location={spot.location} category={spot.category} image={spot.image} id={spot.id} lat={spot.lat} lng={spot.lng}/>)
  return (
    <div name="test1">
    <h1 id= 'savedHeader'> Here are the spots you've saved:</h1>
    <div className='savedContainer'>
{favs} 
</div>
    </div>
  )
}

export default SavedSpots