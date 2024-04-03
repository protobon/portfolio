import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { ScrollToTop } from './components/ScrollToTop'


function App() {
  return (
    <div className={`font-roboto scroll-smooth transition-transform duration-500`}>
      <div className='bg-[url("src/assets/desk2.jpg")] bg-cover bg-center bg-origin-padding'>
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
