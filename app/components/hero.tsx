import { Main } from "next/document"
import Image from "next/image";
export default function Hero() {
    return (
        <div className="flex flex-col items-center mb-10 h-screen">
        <h2 className="text-center text-5xl font-bold mt-52	">I AM DAVON BURKS <br />AND I AM A WEBMASTER</h2>
        <div className="bg-gradient-to-b from-primary to-secondary p-4 rounded-lg mt-10">
            <Image 
                src="/ai-me.png"  
                width={315}
                height={315}
                alt="Ai version of me"
                className="rounded-full "
            />
            <h3 className="font-bold mt-3 text-center text-3xl">AI DAVON BURKS</h3>
            <p className="italic text-center text-accent">(Somewhat Accurate)</p>
        </div>
    </div>
    );
  }
  