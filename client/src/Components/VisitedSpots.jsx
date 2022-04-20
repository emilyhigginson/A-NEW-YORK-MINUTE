import React from 'react'

  function VisitedSpots({ myReviews, user}) {
  
      return (
        <div id="reviewsContainer" name="test2">
          <h1 id="reviewedHeader"> Where you've been & what you've thought:  </h1>
          <h2 id="reviewedSub"> Here are all of the places you've been! Once you write a review, it is added here. </h2>
          {/* {reviewedSpots} */}
          <div id='reviewContainer'>
          {myReviews}
          </div>
        </div>
      )
    }
    
    export default VisitedSpots