import Image from 'next/image';
import NavBar from './navbar';
import Hero from './hero';
import About from './about';
import Projects from './projects';
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}
