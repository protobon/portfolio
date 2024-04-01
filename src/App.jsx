import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className='font-roboto transition-transform duration-500 bg-gradient-to-tr from-slate-400 via-slate-700 to-black'>
      <div className='bg-[url("src/assets/world.jpg")] bg-cover'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
