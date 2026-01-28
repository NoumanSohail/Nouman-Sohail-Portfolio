import React from 'react'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import About from './components/sections/About'

const page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
    </div>
  )
}

export default page
