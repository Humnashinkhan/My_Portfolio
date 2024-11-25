import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import Projects from './components/Projects/Projects';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>
      
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
    
  );
}

export default App;