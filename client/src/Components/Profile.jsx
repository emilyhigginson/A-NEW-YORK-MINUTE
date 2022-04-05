import React from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import NewSpotForm from './NewSpotForm'

function Profile() {
  return (
    <div>
      <h1>Welcome back, user! Saved Spots/Visited Spots/Add a Spot</h1>
<SavedSpots/>
<VisitedSpots/>
<NewSpotForm/>


    </div>
  )
}

export default Profile