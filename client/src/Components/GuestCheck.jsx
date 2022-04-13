import React from 'react'

function MyReviews({name, comment}) {
  return (
    <div id='checkContainer'>
    <div id ='check'>
      <div id='checkContent'>
      <h3> {name}</h3>
      <p> {comment}</p>
      </div>
    </div>
    </div>
  )
}

export default MyReviews