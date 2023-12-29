import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="flex justify-center mx-auto	  mt-20 w-full md:w-9/12 ">
      <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 w-full">
        <div className="flex flex-wrap justify-between ">
          <h3 className="font-bold text-center justify-center text-xl m-5">CONTACT HERE:</h3>
          <a className="flex text-xl font-bold " href="mailto:burksdavon29@yahoo.com"><Mail fill="white"  color="#111" size={40} strokeWidth={1}/></a>
          <a className="flex text-xl font-bold"  href="https://www.linkedin.com/in/davonburks/"><Linkedin  fill="white" size={40}   strokeWidth={0}/> </a>
          <a className="flex text-xl font-bold" href="https://github.com/davonburks"><Github  fill="white"  color="#111" size={40} strokeWidth={0}/> </a>
        </div>
        
      </div>
    </div>
  );
}
