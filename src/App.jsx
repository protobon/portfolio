import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { ScrollToTop } from './components/Util/ScrollToTop'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <ScrollToTop/>
    </div>
  )
}

export default App
