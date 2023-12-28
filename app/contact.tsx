import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex justify-center mx-auto	  mt-20 w-full md:w-9/12 ">
      <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 w-full">
        <div className="flex flex-wrap justify-between ">
          <h3 className="font-bold text-center text-xl">CONTACT HERE:</h3>
          <a className="flex text-xl font-bold " href="mailto:burksdavon29@yahoo.com"><Mail />Email</a>
          <a className="flex text-xl font-bold"  href="https://www.linkedin.com/in/davonburks/"><Linkedin /> LinkedIn</a>
          <a className="flex text-xl font-bold" href="https://github.com/davonburks"><Github /> GitHub</a>
        </div>
        
      </div>
    </div>
  );
}
