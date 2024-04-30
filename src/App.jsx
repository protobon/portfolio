import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { ScrollToTop } from './components/Util/ScrollToTop'
import { LanguageDropdown } from './components/Util/LanguageDropdown'
import { useLanguage } from './components/Util/LanguageContext'
import files from './data/files.json'

function App() {
  const { language } = useLanguage();
  return (
    <div>
      <LanguageDropdown />
      <Navbar language={language} />
      <Hero files={files["hero"]} language={language} />
      <About files={[...files["about"], ...files["diplomas"]]} language={language} />
      <Experience files={files["experience"]} language={language} />
      <div className='bg-[url("./data/squares.svg")] bg-cover bg-center'>
        <Projects files={files["projects"]} language={language} />
        <Contact language={language} />
      </div>
      <ScrollToTop/>
    </div>
  )
}

export default App
