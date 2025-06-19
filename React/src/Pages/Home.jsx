import React from 'react'

const Home = ({items,user}) => {
  return (
    <div>
      <ol>
        {items.map((array)=><li>{array}</li>)}
      </ol>
      <h1>Username:{user.username}</h1>
      <h1>Password:{user.password}</h1>
    </div>
  )
}

export default Home