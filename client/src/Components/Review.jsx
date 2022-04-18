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

  const comment = reviews.map(review => <li>{review.comment}</li>)
console.log(comment)
    return (
    <div>
        {comment}
    </div>
  )
}

export default Review