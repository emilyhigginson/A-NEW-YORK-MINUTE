import React from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import NewSpotForm from './NewSpotForm'
import { UserContext } from './UserContext'

function Profile({user, spotArray, onFormSubmit, handleDelete}) {
  console.log(user)
  return (
    <div>
      <h1>Welcome back, {user}! </h1>
      <img></img>
<SavedSpots spotArray={spotArray} user={user} handleDelete={handleDelete}/>
<VisitedSpots spotArray={spotArray} user={user} />
{/* <NewSpotForm onFormSubmit={onFormSubmit}/> */}
    </div>
  )
}

export default Profile