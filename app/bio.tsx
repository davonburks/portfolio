
import { SquareUserRound, School2, ClipboardList } from "lucide-react";

export default function Bio() {
    return (
      <div className="flex flex-wrap lg:flex-nowrap justify-center mx-auto	mt-20 w-9/12">
        <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 w-full">
          <SquareUserRound color="#00FF23" className="w-full size-14" />
          <h3 className="font-bold mt-3 text-center text-2xl pb-5">BIOGRAPHY</h3>
          <hr />
          <p className="pt-5">
            I Want To Build Things That Can Solve All Of The Problems I Face In My
            Own Life. Learning Webmaster Technologies Has Empowered Me To Create
            Those Things.
          </p>
        </div>
        <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 w-full">
        <School2  color="#00FF23" className="w-full size-14" />
          <h3 className="font-bold mt-3 text-center text-2xl pb-5">EDUCATION</h3>
          <hr />
          <p className="pt-5">
          Graduated From Georgia Southern University With A Bachelor Of Science In Information Technology.<br /><br />
          Also, I Learned A Lot From Various Resources On The Internet. 
          </p>
        </div>
        <div className="bg-gradient-to-b from-primary to-secondary p-10 rounded-lg mx-5 w-full">
        <ClipboardList color="#00FF23" className="w-full size-14" />
          <h3 className="font-bold mt-3 text-center text-2xl pb-5">EXPERIENCE</h3>
          <hr />
          <ul className="pt-3">
            <li className="py-3">Stylist Solutions- Webmaster (August 2018- May 2019)</li>
            <hr />
            <li className="py-3">Freelance - Web Designer (November 2019- May 2022)</li>
            <hr />
            <li className="py-3">APCU - Marketing Webmaster (June 2022 - Present)</li>
          </ul>
        </div>
      </div>
    );
  }
  