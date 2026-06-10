import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Welcome() {

    const user = useContext(UserContext);

  return (
    <div>
      Welcome, {user.name}!
    </div>
  )
}

export default Welcome
