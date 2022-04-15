import React from 'react'

  function VisitedSpots({ myReviews, user}) {
  
    // const reviewedSpots = (user.spots)
    // console.log(reviewedSpots)
    
    
      return (
        <div id="reviewsContainer" name="test2">
          <h1> Here are all of the reviews you've written:  </h1>
          {/* {reviewedSpots} */}
          <div id='reviewContainer'>
          {myReviews}
          </div>
        </div>
      )
    }
    
    export default VisitedSpots