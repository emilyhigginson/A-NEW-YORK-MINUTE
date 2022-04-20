import React from 'react'

function Review({ reviews, id }) {

  const comment = reviews.map(review => <li id='reviewComment'>{review.comment}</li>)
  return (
    <div>
      Reviews:
      {comment}
    </div>
  )
}

export default Review