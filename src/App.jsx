import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skiills from './components/Skiills'
import ProjectCard from './components/Projects'
import Projects from './components/Projects'
import CodeSection from './components/Code'
import ClientReviews from './components/ClientReview'
import Contact from './components/Contacts'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skiills/>
      <Projects/>
      <CodeSection/>
      <ClientReviews/>
      <Contact/>
    </div>
  )
}

export default App;