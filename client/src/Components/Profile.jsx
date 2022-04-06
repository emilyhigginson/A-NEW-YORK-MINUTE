import React from 'react'
import SavedSpots from './SavedSpots'
import VisitedSpots from './VisitedSpots'
import NewSpotForm from './NewSpotForm'

function Profile({user, spotArray, onFormSubmit}) {
  return (
    <div>
      <h1>Welcome back, user! </h1>
<SavedSpots/>
<VisitedSpots spotArray={spotArray} user={user} />
<NewSpotForm onFormSubmit={onFormSubmit}/>


    </div>
  )
}

export default Profile