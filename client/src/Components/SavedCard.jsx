import React, { useEffect, useState } from 'react'
import ReviewForm from './ReviewForm'

function SavedCard({ setReviews, handleDelete, user, reviews, id, name, location, category, image }) {
  
  const [formIsShowing, setFormIsShowing] = useState(true)

  function toggleReviewForm() {
    setFormIsShowing((formIsShowing) => !formIsShowing)
  }

  return (

    <div id='spotCard'>
      <div id='leftCard'>
        <h1 id='savedLocationName'>{name}</h1>
        <img id="spotimage" style={{ "width": "500px" }} src={image} />
        <h3 id="savedCategoryChild1" >{category} </h3>
        <h3 id="savedCategoryChild2"> {location} </h3>
        <div id='buttonDiv'>
          <button className='button' onClick={() => handleDelete(id)}> ★ Unsave </button>
          <button className='button' onClick={toggleReviewForm} > Been here? Write a Review </button>
        </div>
        {formIsShowing ? null : <ReviewForm  spot_id={id} user={user} />}

      </div>

    </div>
  )
}

export default SavedCard