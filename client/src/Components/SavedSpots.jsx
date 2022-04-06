import React, { useEffect, useState } from 'react'
import SavedCard from './SavedCard'

function SavedSpots({user, spotArray, handleDelete}) {

const [mySaved, setMySaved] = useState([])

  useEffect(()=> {
    fetch('/favorites')
    .then(res=>res.json())
  
    .then(data=> setMySaved(data))
  }, [])
console.log(mySaved)

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
// const mySpots = spotArray.map( spot => spot.id)
// // console.log(mySpots)

// const favs = mySpots.map((spot) => {
//   console.log(spot)
//   if (spot.id === mySaved.spot_id) {
//     return <SavedCard key={spot.id} id={spot.id}/>
// } else {
//   return "No favorites"
// }
// });
//  <SavedCard user={user} key={spot.id} name={spot.name} location={spot.location} category={spot.category} price={spot.price_range} walkin={spot.walk_in} image={spot.image} id={spot.id}/>)

const favs = mySaved.map((spot) => <SavedCard handleDelete= {handleDelete} user={user} key={spot.id} name={spot.spot_name} location={spot.spot_location} category={spot.spot_category} price={spot.spot_price} walkin={spot.walk_in} image={spot.spot_image} id={spot.id}/>)
  return (
    <div>
    <h1> Here are the spots you've saved:</h1>
{favs} 
    </div>
  )
}

export default SavedSpots