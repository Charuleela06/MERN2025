import React from 'react'

const Child = ({name,dept,roll,contact}) => {
  return (
    <div>Child
      <h1>Name: {name}</h1>
      <h1>Department: {dept}</h1>
      <h1>Contact: {contact}</h1>

    </div>
  )
}

export default Child