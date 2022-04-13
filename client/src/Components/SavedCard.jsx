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
        <h1 id= 'locationName'>{name}</h1>
        <img id= "spotimage" style={{"width": "500px"}} src={image}/>
        <div id="category">
        <h3 id="categoryChild1" >{category} </h3> 
        <h3 id="categoryChild2"> 📍{location} </h3>
        </div>
    
        <button onClick={toggleReviewForm} > Been here? Write a Review </button>
        {formIsShowing ? null : <ReviewForm spot_id={id} user={user}/>}

        </div>

          <button onClick={() => handleDelete(id)}> Unsave this Spot </button>
          <button> </button>
      </div>
    )
  }

export default SavedCard