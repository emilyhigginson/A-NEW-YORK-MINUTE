import React, {useState} from 'react'
import ReviewForm from './ReviewForm'


function SpotCard({name, location, category, walkin, image, price, user, id, spot_id}) {
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
    <div>
        <h1>{name}</h1>
        <img style={{"width": "500px"}} src={image}/>
        <h2>{category}</h2>
        <h3>{location}</h3>
        <p>{price}</p>
        <p> Walk-ins welcome? {walkin ? "yes" : "no"}</p>
        <p> Reviews: {}</p>
        <button onClick={() => {setIsClicked(); handleClick()}}> {isClicked ?  "★" : "☆"}  </button>
        <button onClick={toggleReviewForm} > Write a Review </button>
        {formIsShowing ? null : <ReviewForm spot_id={id} user={user}/>}
    </div>
  )
}

export default SpotCard