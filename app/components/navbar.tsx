import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full bg-primary text-white p-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="text-xl font-bold mb-4 md:mb-0"><a href="/#">DAVON BURKS</a></div>
      <ul className="flex flex-col md:flex-row md:space-x-4">
        <li>
          <Link
            href="/#about"
            className="hover:bg-slate-500 px-3 py-2 rounded block text-center"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/#projects"
            className="hover:bg-slate-500 px-3 py-2 rounded block text-center"
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover:bg-slate-500 px-3 py-2 rounded block text-center"
          >
            BLOG
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            className="hover:bg-slate-500 px-3 py-2 rounded block text-center"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
