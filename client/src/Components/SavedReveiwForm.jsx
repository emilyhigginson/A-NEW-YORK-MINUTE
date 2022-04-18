import React, {useState, useContext} from 'react'
import MyReviews from './GuestCheck'
import { UserContext } from "./UserContext"

function SavedReviewForm({reviews, setReviews, handleDelete, user_id, spot_id, onReviewSubmit, reviewArray}) {

    const [comment, setComment] = useState("")
    
    function handleSubmit(event){
      event.preventDefault();

        const review = {
            comment, 
            user_id: user_id, 
            spot_id: spot_id
        }
        fetch("/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(review),

          })

            .then((response) => response.json())
            
 
            .then(review => console.log(review)) 
        .then(review => onReviewSubmit(review))       }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label> Review: </label>
      <br></br>
        <input 
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

 <button 
        type="submit"
        name="submit"
       > 
        <strong>Review</strong>
    </button>
        </form>
    </div>
  )
}

export default SavedReviewForm