import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { ScrollToTop } from './components/Util/ScrollToTop'


function App() {
  return (
    <div>
      <div className='bg-[url("./data/oscillate.svg")] bg-cover bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <div className='bg-[url("./data/squares.svg")] bg-cover bg-center'>
        <Projects/>
        <Contact/>
      </div>
      <ScrollToTop/>
    </div>
  )
}

export default App
