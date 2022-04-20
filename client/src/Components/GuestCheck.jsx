import React from 'react'

function MyReviews({name, comment, img}) {
  return (
    <div id='checkContainer'>
    <div id ='check'>
      <div id='checkContent'>
      <h3> {name}</h3>
      <img id= 'reviewedImg' src= {img} />
      <p> {comment}</p>
      </div>
    </div>
    </div>
  )
}

export default MyReviews