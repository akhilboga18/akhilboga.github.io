import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import NavBar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Achievments from './components/Achievments/Achievments';

function App() {

  return (
    <div className='overflow-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievments />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
