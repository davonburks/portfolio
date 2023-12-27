export default function NavBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="bg-primary text-white p-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="text-xl font-bold mb-4 md:mb-0">DAVON BURKS</div>
      <ul className="flex flex-col md:flex-row md:space-x-4">
        <li>
          <a
            href="#home"
            className="hover:bg-slate-500 px-3 py-2 rounded block text-center"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:bg-slate-500 px-3 py-2 rounded block text-center"
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:bg-slate-500 px-3 py-2 rounded block text-center"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
