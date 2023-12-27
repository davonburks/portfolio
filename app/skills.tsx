import { Brain } from "lucide-react";

export default function Skills() {
  return (
    <div className="flex justify-center mx-auto	  mt-20 w-9/12 ">
      <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 w-full">
        <div className="flex justify-center items-center mb-5">
          <Brain color="#00FF23" className=" size-16 " />
          <h3 className="font-bold mt-3 text-center text-2xl pb-5">SKILLS</h3>
        </div>
        <hr />
        <ul className="flex flex-wrap p-4  w-full justify-between ">
          <li className="p-1">HTML</li>
          <li className="p-1">CSS</li>
          <li className="p-1">UX/UI DESIGN</li>
          <li className="p-1">WORDPRESS</li>
          <li className="p-1">SQL</li>
          <li className="p-1">JAVASCRIPT</li>
          <li className="p-1">TAILWIND CSS</li>
          <li className="p-1">SASS</li>
          <li className="p-1">REACT </li>
          <li className="p-1">SUPABASE</li>
        </ul>
      </div>
    </div>
  );
}
