import React, {useState, useEffect} from 'react'

function VisitedSpots({ myReviews, user}) {
  
const reviewedSpots = (user.spots)
console.log(reviewedSpots)


  return (
    <div>
      <h1> Here are all of the reviews you've written:  </h1>
      {/* {reviewedSpots} */}
      {myReviews}
    </div>
  )
}

export default VisitedSpots