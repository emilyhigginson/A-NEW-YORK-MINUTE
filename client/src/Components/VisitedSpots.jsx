import React from 'react'
import ReviewedMap from './ReviewedMap'

  function VisitedSpots({ myReviews, user}) {
  
    // const reviewedSpots = (user.spots)
    // console.log(reviewedSpots)
    console.log(myReviews)
    
      return (
        <div id="reviewsContainer" name="test2">
          <h1 id="reviewedHeader"> Reviews you've written:  </h1>
          {/* {reviewedSpots} */}
          <div id='reviewContainer'>
          {myReviews}
          </div>
        </div>
      )
    }
    
    export default VisitedSpots