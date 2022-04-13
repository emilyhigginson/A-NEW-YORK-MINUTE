import React from 'react'

function MyReviews({name, comment}) {
  return (
    <div id='checkContainer'>
    <div id ='check'>
      <h3> {name}</h3>
      <p> {comment}</p>
    </div>
    </div>
  )
}

export default MyReviews