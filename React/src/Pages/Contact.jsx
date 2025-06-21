import React, {useContext} from 'react'
import {Context} from '../Hooks/Context.jsx'

const Contact = () => {
  const user = useContext(Context)
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.phone}</h1>
    </div>
  )
}

export default Contact