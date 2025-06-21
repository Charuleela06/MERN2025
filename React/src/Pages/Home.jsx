/*import React from 'react'

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

export default Home*/
import React from 'react'
import About from './About.jsx'
import image from './assets/wheel.png'

const Home = ({items,users}) => {
  return (
    <About items={items} users={users} />
  )
}

export default Home