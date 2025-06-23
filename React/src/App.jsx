import React,{useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Child from './Component/Child.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Counter from './Pages/Counter.jsx'
import Navbar from './Component/Navbar.jsx'
import State from './Hooks/State.jsx'
import Hooks from './Pages/Hooks.jsx'
import Effect from './Hooks/Effect.jsx'
import Context from './Hooks/Context.jsx'

const App = () => {

  var array = ['tinu', 'ram', 'don', 'lily', 'ruby'];
  var login = { username: 'charu', password: 'charu@123' }
  return (
    <div>
      {/* <Child name="lily" dept="FrontEnd Developer" contact="8976459705"/>
      <Home items={array} user={login}/>
      <About/>
      <Skills/>
      <Contact/>
      <Login userlogin={login}/>
      <Counter/> */}
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home items={array} users={login} />} />
        <Route path='/about' element={<About items={array} users={user}/>}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/hooks' element={<Hooks />}/>
        <Route path='/state' element={<State />}/>
        <Route path='/effect' element={<Effect />}/>
      </Routes>

    </div>

  )
}

export default App