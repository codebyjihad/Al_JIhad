import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skiills from './components/Skiills'
import ProjectCard from './components/Projects'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skiills/>
      <Projects/>
    </div>
  )
}

export default App;