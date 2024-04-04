import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'


function App() {
  return (
    <div>
      <div className={`bg-[url("/assets/desk2.jpg")] bg-cover bg-center bg-origin-padding`}>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <ScrollToTop/>
    </div>
  )
}

export default App
