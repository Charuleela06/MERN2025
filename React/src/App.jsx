import React from 'react'
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
import Ref from './Hooks/Ref.jsx'
import Reducer from './Hooks/Reducer.jsx'
import Context from './Hooks/Context.jsx'
import Todo from './Pages/Todo.jsx'
const App = () => {

  var array = ['Oliver', 'Wade', 'Max', 'Hadrien', 'Stein'];
  var login = { username: 'durgadevi', password: 'durga0906' }
  return (
    <div>
      {/* <Child name="Oliver" dept="FrontEnd Developer" contact="8807671271"/>
      <Home items={array} user={login}/>
      <About/>
      <Skills/>
      <Contact/>
      <Login userlogin={login}/>
      <Counter/> */}
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home items={array} user={login} />} />
        <Route path='/about' element={<About items={array} user={login} />}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/hooks' element={<Hooks />}/>
        <Route path='/state' element={<State />}/>
        <Route path='/effect' element={<Effect />}/>
        <Route path='/ref' element={<Ref />}/>
        <Route path='/reducer' element={<Reducer />}/>
        <Route path='/context' element={<Context />}/>
        <Route path='/todo' element={<Todo />}/>
      </Routes>

    </div>

  )
}

export default App