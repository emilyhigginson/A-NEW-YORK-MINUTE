import React, { useState, useEffect } from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import Friends from './Friends'
import GuestCheck from './GuestCheck'
import { Link } from 'react-scroll'
import ReviewedMap from './ReviewedMap'

function Profile({ user, spotArray, handleDelete, onReviewSubmit, reviewArray }) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`/reviews`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setReviews((reviews) =>
          reviews.filter((review) => review.id !== id)

        );
        console.log(reviews)
      }
    });
  }
  console.log(reviews)

  const myReviews = reviews.map(review => {
    if (review.user_id === user.id) {
      return <GuestCheck comment={review.comment} name={review.spot_name} img={review.photo} > </GuestCheck>
    }
    else {
      return null
    }
  })

  return (
    <div>
      <div id="profileHeader">
        <h1 id='welcome'> Welcome back, {user.username}! </h1>
        <Link className='link' to="test1" spy={true} smooth={true} offset={0} duration={500} >   Saved Spots </Link>
        <Link className='link' to="test2" spy={true} smooth={true} offset={0} duration={500} >   Reviewed Spots </Link>
      </div>
      <SavedSpots
        onReviewSubmit={onReviewSubmit}
        reviewArray={reviewArray}
        setReviews={setReviews}
        reviews={reviews}
        spotArray={spotArray}
        user={user}
        handleDelete={handleDelete} />
      <VisitedSpots myReviews={myReviews} user={user} />
    </div>
  )
}

export default Profile