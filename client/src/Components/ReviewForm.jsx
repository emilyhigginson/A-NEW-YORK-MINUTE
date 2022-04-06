import React, {useState, useContext} from 'react'
import { UserContext } from "./UserContext"

function ReviewForm({user, spot_id}) {

    const [comment, setComment] = useState("")
    const { currentUser } = useContext(UserContext)
    const user_id = currentUser?.id


    function handleSubmit(event){
        const review = {
            comment, 
            user_id: user.id, 
            spot_id: spot_id
        }
        event.preventDefault();
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

export default ReviewForm