function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-slate-900 text-slate-100 shadow">

      <h1 className="text-xl font-bold text-indigo-400">
        BelénAlmendros
      </h1>

      <ul className="flex gap-8 text-slate-300">

        <li>
          <a
            href="#home"
            className="hover:text-indigo-400 transition"
          >
            Inicio
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-indigo-400 transition"
          >
            Proyectos
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-indigo-400 transition"
          >
            Contacto
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;