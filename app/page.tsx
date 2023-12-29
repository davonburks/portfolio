import NavBar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
