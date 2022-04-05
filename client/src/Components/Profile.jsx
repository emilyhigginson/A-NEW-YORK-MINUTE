import React from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import NewSpotForm from './NewSpotForm'

function Profile({onFormSubmit}) {
  return (
    <div>
      <h1>Welcome back, user! </h1>
<SavedSpots/>
<VisitedSpots/>
<NewSpotForm onFormSubmit={onFormSubmit}/>


    </div>
  )
}

export default Profile