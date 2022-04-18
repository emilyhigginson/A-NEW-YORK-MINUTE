import React from 'react'

function Review({reviews, id}) {
  // const comment = reviews.map(review => {
  //         if (review.spot_id === id) {
  //           return <p> {review.comment} - {review.username}</p> 
  //         }
  //         else {
  //             return null
  //         }
      
  //     }
  // )
  console.log(reviews)

  const comment = reviews.map(review => <li id= 'reviewComment'>{review.comment}</li>)
    return (
    <div>
      Reviews:
        {comment}
    </div>
  )
}

export default Review