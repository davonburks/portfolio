import { Presentation, School2, PencilRuler, BookHeart } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div id="projects">
      
      <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-auto  md:w-9/12">
        <Presentation color="#00FF23" className="w-16 h-16 mx-auto" />
        <h3 className="font-bold text-center text-2xl pb-5">PROJECTS</h3>
        <p className="text-center">
          I build a ton of projects over the years. I will only list the
          projects that are currently online and the projects I plan on building
          in the future!
        </p>
      </div>
      <div className="flex justify-center mx-auto mt-20  flex-wrap lg:flex-nowrap  md:w-9/12">
        <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 my-5">
          <School2 color="#00FF23" className="w-16 h-16 mx-auto" />
          <h3 className="font-bold text-center text-2xl pb-5">PROJECKOG</h3>
          <h4 className="text-center text-xl italic text-accent pb-5">
            STARTUP STUDIO WEBSITE
          </h4>
          <p className="text-center">
            This project is a website for a startup studio I am creating to
            manage all of the projects I want to create. The website/company
            will be a way for me to manage all of my projects legally.
          </p>
          <p className="text-center text-accent italic">
            Status: Landing Page Design
          </p>
          <button className="bg-accent p-3 mx-auto block text-center mt-5 font-bold rounded	">
            <Link href="https://projeckog.com" target="_blank">Visit Website</Link>
          </button>
        </div>

        <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 my-5">
        <BookHeart color="#00FF23" className="w-16 h-16 mx-auto" />
          <h3 className="font-bold text-center text-2xl pb-5">STORY NOTES</h3>
          <h4 className="text-center text-xl italic text-accent pb-5">
            STARTUP LANDING PAGE
          </h4>
          <p className="text-center">
            This project is the official website for a Desktop application I am
            in the process of creating. This website will have the app
            documentation, marketing details, and a blog for SEO.
          </p>
          <p className="text-center text-accent italic">Status: UX Design</p>
          <button className="bg-accent p-3 mx-auto block text-center mt-5 font-bold	rounded">
            <Link href="https://storynotes.io" target="_blank">Visit Website</Link>
          </button>
        </div>

        <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 my-5">
        <PencilRuler color="#00FF23" className="w-16 h-16 mx-auto" />
          <h3 className="font-bold text-center text-2xl pb-5">WEB X MASTERS</h3>
          <h4 className="text-center text-xl italic text-accent pb-5">
            TOOL DIRECTORY WEBSITE
          </h4>
          <p className="text-center">
            This project has job listings for people interested in the Webmaster
            industry. The website also provides resources, tips, and news
            updates about the industry.
          </p>
          <p className="text-center text-accent italic">
            Status: Started Coding
          </p>
          <button className="bg-accent p-3 mx-auto block text-center mt-5 font-bold	rounded">
            <Link href="https://webxmasters.io" target="_blank">Visit Website</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
