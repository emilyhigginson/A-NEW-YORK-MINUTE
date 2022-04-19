import React, { useEffect, useState } from 'react'
import ReviewForm from './ReviewForm'
import SavedReviewForm from './SavedReveiwForm'
function SavedCard({ setReviews, handleDelete,favoriteId, handleFavoriteDelete, user_id, reviews, id, name, location, category, image, reviewArray, onReviewSubmit }) {
  
  const [formIsShowing, setFormIsShowing] = useState(true)

  function toggleReviewForm() {
    setFormIsShowing((formIsShowing) => !formIsShowing)
  }
console.log(favoriteId)
  return (

    <div id='savedSpotCard'>
      <div id='leftCard'>
        <h1 id='savedLocationName'>{name}</h1>
        <img id="spotimage" style={{ "width": "500px" }} src={image} />
        <h3 id="categoryChild1" >{category} </h3>
        <h3 id="categoryChild2"> {location} </h3>
        <div id='buttonDiv'>
          <button className='button' onClick={() => handleFavoriteDelete(favoriteId)}> ★ Unsave </button>
          <button className='button' onClick={toggleReviewForm} > Been here? Write a Review </button>
        </div>
        {formIsShowing ? null : <SavedReviewForm  onReviewSubmit={onReviewSubmit} handleFavoriteDelete={handleFavoriteDelete}
reviewArray={reviewArray} favoriteId={favoriteId} spot_id={id} user_id={user_id} />}

      </div>

    </div>
  )
}

export default SavedCard