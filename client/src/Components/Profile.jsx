import React, {useState, useEffect} from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import Friends from './Friends'
import GuestCheck from './GuestCheck'
import {Link } from 'react-scroll'

function Profile({user, spotArray, handleDelete, onReviewSubmit, reviewArray}) {
const [reviews , setReviews] = useState([])

  useEffect(()=> {
    fetch (`/reviews`)
    .then(res => res.json())
    .then(data => setReviews(data)) 
  }, [])

console.log(reviews)

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
      <Link  className='link' to= "test1" spy={true} smooth={true} offset={0} duration={500} >   Saved Spots </Link>
      <Link  className='link' to= "test2" spy={true} smooth={true} offset={0} duration={500} >   Reviewed Spots </Link>
      </div>
      {/* <Friends user={user}></Friends> */}
<SavedSpots 
onReviewSubmit={onReviewSubmit} 
reviewArray={reviewArray}
setReviews={setReviews} 
reviews={reviews} 
spotArray={spotArray} 
user={user}
 handleDelete={handleDelete}/>

<VisitedSpots myReviews={myReviews} user={user} />
    </div>
  )
}

export default Profile