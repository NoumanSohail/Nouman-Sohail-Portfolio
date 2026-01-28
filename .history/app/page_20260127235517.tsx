import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/footer/Footer'

const page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
