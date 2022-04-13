import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Spotmap from './Spotmap'
import ReviewForm from './ReviewForm'

function SavedCard({handleDelete, user, id, name, location, category, image}) {
  const [formIsShowing, setFormIsShowing] = useState(true)
  const [showReviews, setShowReviews] = useState(false);

  function toggleReviewForm() {
    setFormIsShowing((formIsShowing) => !formIsShowing)
}

    return (
      
<div id ='spotCard'>
       <div id= 'leftCard'>
        <h1 id= 'savedLocationName'>{name}</h1>
        <img id= "spotimage" style={{"width": "500px"}} src={image}/>
        <h3 id="savedCategoryChild1" >{category} </h3> 
        <h3 id="savedCategoryChild2"> ● {location} </h3>
        <div id = 'buttonDiv'>
        <button className='button' onClick={() => handleDelete(id)}> ★ Unsave </button> 
        <button className='button' onClick={toggleReviewForm} > Been here? Write a Review </button>
        </div>
        {formIsShowing ? null : <ReviewForm spot_id={id} user={user}/>}

        </div>

      </div>
    )
  }

export default SavedCard