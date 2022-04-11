import React, {useState} from 'react';
import ReviewForm from './ReviewForm';
import Spotmap from './Spotmap';
// import Review from './Review'

function SpotCard({name, location, category, lat, lng, image, price, user, id, spot_id}) {
const [formIsShowing, setFormIsShowing] = useState(true)
const [isClicked, setIsClicked] = useState(false)
 // add to favorites 

 function toggleReviewForm() {
     setFormIsShowing((formIsShowing) => !formIsShowing)
 }

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
        <button id = 'saveButton' onClick={() => {setIsClicked(); handleClick()}}> {isClicked ?  "★" : "☆"}  </button>

        
        </div>
    
      {/* <Review/>             */}
        <button onClick={toggleReviewForm} > Write a Review </button>
        {formIsShowing ? null : <ReviewForm spot_id={id} user={user}/>}
        </div>
        <div id= "filterMap">
          
        <Spotmap name={name} lat={lat} lng={lng}/>
        </div>
    </div>

  )
}

export default SpotCard