import React from 'react'

const Profile = (props) => {
  if (!props.name || !props.bio) {
    return (
      <main id="content" role="main" className="base">
        <h1>Just a React Page</h1>
        <p>Nothing to see here!</p>
      </main>
    )
  } else {
    return (
      <main id="content" role="main" className="base">
        <h1>{props.name}'s React Page</h1>
        <p>{props.bio}</p>
      </main>
    )
  }
}

export default Profile