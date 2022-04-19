import React, {useState, useContext} from 'react'
import MyReviews from './GuestCheck'
import { UserContext } from "./UserContext"

function ReviewForm({reviews, setReviews, handleDelete, user, spot_id}) {

    const [comment, setComment] = useState("")
    
    

    function handleSubmit(event){
      event.preventDefault();

        const review = {
            comment, 
            user_id: user.id, 
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
        }
        console.log(spot_id)

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
        <br></br>

 <button onClick={handleDelete}
        type="submit"
        name="submit"
       > 

        <strong>Review</strong>
    </button>
        </form>
    </div>
  )
}

export default ReviewForm