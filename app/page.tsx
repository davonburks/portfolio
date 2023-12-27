import Image from 'next/image';
import NavBar from './navbar';
import Hero from './hero';
import About from './about';
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}
