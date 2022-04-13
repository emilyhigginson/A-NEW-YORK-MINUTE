import React, {useState, useEffect} from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import { UserContext } from './UserContext'
import GuestCheck from './GuestCheck'

function Profile({user, spotArray, handleDelete}) {
const [reviews , setReviews] = useState([])

  useEffect(()=> {
    fetch (`/reviews`)
    .then(res => res.json())
    .then(data => setReviews(data)) 
  }, [])


  const myReviews= reviews.map(review => {
    if(review.user_id === user.id) {
    return <GuestCheck comment = {review.comment} name = {review.spot_name} > </GuestCheck> 
  }
  else {
      return null
  }
  })

  return (
    <div>
      <div id="profileHeader">
      {/* <img id= 'avatar' src= {user.avatar} /> */}
      <h1 id='welcome'> Welcome back, {user.username}! </h1>
      </div>
<SavedSpots spotArray={spotArray} user={user} handleDelete={handleDelete}/>

<VisitedSpots myReviews={myReviews} user={user} />
    </div>
  )
}

export default Profile