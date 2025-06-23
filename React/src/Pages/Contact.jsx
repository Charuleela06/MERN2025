import React, { useContext } from 'react'
import  Context  from '../Hooks/Context'
import image from '../assets/wheel.png'
const Contact = () => {
  const user = useContext(Context);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.phone}</h1>
      <img src={image} alt="chakra" />
    </div>
  )
}

export default Contact