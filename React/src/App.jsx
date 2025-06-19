import React from 'react'
import Child from './Componenet/Child.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Counter from './Pages/Counter.jsx'


const App = () => {

  var array = ['Oliver' ,'Wade','Max','Hadrien','Stein'];
  var login = {username:'durgadevi',password:'durga0906'}
  return (
    <div>
      <Child name="Oliver" dept="FrontEnd Developer" contact="8807671271"/>
      <Home items={array} user={login}/>
      <About/>
      <Skills/>
      <Contact/>
      <Login userlogin={login}/>
      <Counter/>
    </div>
    
  )
}

export default App