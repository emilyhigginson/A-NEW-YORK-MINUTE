import React, { useEffect, useState } from 'react'
import ReviewForm from './ReviewForm'
import SavedReviewForm from './SavedReveiwForm'
function SavedCard({ setReviews, handleDelete, handleFavoriteDelete, user_id, reviews, id, name, location, category, image, reviewArray, onReviewSubmit }) {
  
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
          <button className='button' onClick={() => handleFavoriteDelete}> ★ Unsave </button>
          <button className='button' onClick={toggleReviewForm} > Been here? Write a Review </button>
        </div>
        {formIsShowing ? null : <SavedReviewForm handleFavoriteDelete={handleFavoriteDelete} onReviewSubmit={onReviewSubmit} 
reviewArray={reviewArray} spot_id={id} user_id={user_id} />}

      </div>

    </div>
  )
}

export default SavedCard