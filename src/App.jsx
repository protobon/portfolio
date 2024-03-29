import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'

function App() {
  return (
    <div className='bg-blue-900 transition-transform duration-500'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
