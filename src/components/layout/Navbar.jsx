function Navbar() {
  return (
    <nav className="sticky top-0  flex justify-between items-center px-8 py-4 text-slate-100 shadow">

      <h1 className="text-xl font-bold text-indigo-400">
         &lt;<span class="text-primary">BelenAlmendros</span> /&gt;
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
            href="#about-me"
            className="hover:text-indigo-400 transition"
          >
            Sobre mi
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