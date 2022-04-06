import React, {useState} from 'react'
import ReviewForm from './ReviewForm'


function SpotCard({name, location, category, walkin, image, price, user, id}) {
const [formIsShowing, setFormIsShowing] = useState(true)
 // add to favorites 

 function toggleReviewForm() {
     setFormIsShowing((formIsShowing) => !formIsShowing)
 }

  return (
    <div>
        <h1>{name}</h1>
        <img style={{"width": "500px"}} src={image}/>
        <h2>{category}</h2>
        <h3>{location}</h3>
        <p>{price}</p>
        <p> Walk-ins welcome? {walkin ? "yes" : "no"}</p>
        {/* <button> {isClicked ?  "★" : "☆"}  </button> */}
        <button onClick={toggleReviewForm}> Write a Review </button>
        {formIsShowing ? null : <ReviewForm spot_id={id} user={user}/>}
    </div>
  )
}

export default SpotCard