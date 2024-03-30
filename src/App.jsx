import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='bg-blue-900 transition-transform duration-500'>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
