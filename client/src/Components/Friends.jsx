import React from 'react'

function Friends({user}) {

    const following = (user.friendees).map(friend => <ul>{friend.username}</ul>)
    const followers = (user.frienders).map(friend => <ul>{friend.username}</ul>) 
  return (
    <div> Following: 
      <ul> {following} </ul>
      Followers:
      {followers}
    </div>
  )
}

export default Friends