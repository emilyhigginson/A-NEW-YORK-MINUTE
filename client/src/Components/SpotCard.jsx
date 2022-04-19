import React, {useState} from 'react';
import ReviewForm from './ReviewForm';
import Spotmap from './Spotmap';
import Review from './Review';

function SpotCard({name, location, spot,  category, lat, lng, image, price, user, id, reviews}) {
const [formIsShowing, setFormIsShowing] = useState(true)
const [isClicked, setIsClicked] = useState(false)
 // add to favorites 
 const [showReviews, setShowReviews] = useState(false);

 function toggleReviews() {
   setShowReviews((showReviews) => !showReviews);
 }
 function toggleReviewForm() {
     setFormIsShowing((formIsShowing) => !formIsShowing)
 }

 function setClicked() {
setIsClicked((isClicked) => !isClicked)}

 function handleClick(){
   const favorite = {
    user_id: user.id, 
    spot_id: id
   }
   fetch("/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(favorite),
   })
   .then((response) => response.json())
   .then(favorite => console.log(favorite))
 }

  return (
    <div id ='spotCard'>
       <div id= 'leftCard'>
        <h1 id= 'locationName'>{name}</h1>
        <img id= "spotimage" style={{"width": "500px"}} src={image}/>
        <div id="category">
        <h3 id="categoryChild1" >{category} </h3> 
        <h3 id="categoryChild2"> 📍{location} </h3>
        <button id = 'saveButton' onClick={() => {setClicked(); handleClick()}}> 
        {/* user.spots.includes(spot) :  */}
        {isClicked ?  "Saved ★" : "Save ☆"}  </button>
        </div>
    
      {/* <Review/>             */}
      <div id='buttonDiv'>
        <button className='spotButton' onClick={toggleReviewForm} > Write a Review </button>
        <button className='spotButton'  onClick={toggleReviews} > Show Reviews </button>
        </div>

        {formIsShowing ? null : <ReviewForm spot_id={id} user={user}/>}

        {showReviews ? <Review reviews={reviews} id={id} /> : null}
        </div>
        <div id= "filterMap">
          
        <Spotmap name={name} lat={lat} lng={lng}/>
        </div>
    </div>

  )
}

export default SpotCard