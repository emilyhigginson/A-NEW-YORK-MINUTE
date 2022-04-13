import React, {useState, useEffect} from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import { UserContext } from './UserContext'

function Profile({user, spotArray, handleDelete}) {
const [reviews , setReviews] = useState([])

  useEffect(()=> {
    fetch (`/reviews`)
    .then(res => res.json())
    .then(data => setReviews(data)) 
  }, [])


  const myReviews= reviews.map(review => {
    if(review.user_id === user.id) {
    return <p> {review.comment} {review.spot_name}</p> 
  }
  else {
      return null
  }
  })

  return (
    <div>
      <br></br>
      <h1>Welcome back, {user.username}! </h1>
      <img></img>
<SavedSpots spotArray={spotArray} user={user} handleDelete={handleDelete}/>

<VisitedSpots myReviews={myReviews} user={user} />
    </div>
  )
}

export default Profile