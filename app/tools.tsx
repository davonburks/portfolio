import { Wrench, FolderKanban } from "lucide-react";

export default function Tools() {
  return (
    <div className="flex flex-col md:flex-row justify-around mx-auto mt-20 w-11/12 md:w-9/12">
      <div className="flex flex-col items-center mb-10 md:mb-0">
        <div className="flex items-center justify-center mb-5">
          <Wrench color="#00FF23" className="w-16 h-16"/>
          <h3 className="font-bold text-center text-2xl pb-5">WEB TOOLS</h3>
        </div>
        <hr className="w-full"/>
        <ul className="flex flex-wrap p-4 w-full justify-center">
          <li className="p-1">PHOTOSHOP</li>
          <li className="p-1">ELEMENTOR</li>
          <li className="p-1">ADOBE XD</li>
          <li className="p-1">SHOPIFY</li>
          <li className="p-1">GITHUB</li>
          <li className="p-1">CODE PEN</li>
          <li className="p-1">NCR</li>
          <li className="p-1">FIGMA</li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mb-5">
          <FolderKanban color="#00FF23" className="w-16 h-16"/>
          <h3 className="font-bold text-center text-2xl pb-5">PRODUCTIVITY TOOLS</h3>
        </div>
        <hr className="w-full"/>
        <ul className="flex flex-wrap p-4 w-full justify-center">
          <li className="p-1">MICROSOFT OFFICE</li>
          <li className="p-1">GOOGLE SUITE</li>
          <li className="p-1">SHAREPOINT</li>
          <li className="p-1">TRELLO/SLACK/DISCORD</li>
          <li className="p-1">CANVA</li>
          <li className="p-1">NCR</li>
          <li className="p-1">HUBSPOT</li>
        </ul>
      </div>
    </div>
  );
}
