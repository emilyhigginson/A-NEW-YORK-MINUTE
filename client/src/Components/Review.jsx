import React from 'react'

function Review({reviews, id}) {
  const comment = reviews.map(review => {
          if (review.spot_id === id) {
            return <p> {review.comment} - {review.spot_id}</p> 
          }
          else {
              return null
          }
      
      }
  )

    return (
    <div>
        {comment}
    </div>
  )
}

export default Review