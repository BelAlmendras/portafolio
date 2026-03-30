import { useEffect, useState } from "react";

function Navbar() {
const [active, setActive] = useState("home");

useEffect(() => {
const sections = ["home", "projects", "about-me", "contact"];

const handleScroll = () => {
  let current = "home";

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - 100;

      if (window.scrollY >= top) {
        current = id;
      }
    }
  });

  setActive(current);
};

window.addEventListener("scroll", handleScroll);
handleScroll();

return () => {
  window.removeEventListener("scroll", handleScroll);
};

}, []);

const linkClass = (id) =>
`transition-colors duration-300 ${
      active === id
        ? "text-pink-300 drop-shadow-[0_0_6px_rgba(251,207,232,0.6)]"
        : "text-slate-300 hover:text-pink-300 hover:drop-shadow-[0_0_6px_rgba(251,207,232,0.6)]"
    }`;

return ( <nav className="sticky top-0 z-50  px-6 py-4 flex items-center justify-between">

  {/* LOGO */}
  <h1 className="logo-text text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
    &lt;<span>BelenAlmendros</span> /&gt;
  </h1>

  {/* MENU */}
  <ul className="flex gap-8">
    <li>
      <a href="#home" className={linkClass("home")}>
        Inicio
      </a>
    </li>

    <li>
      <a href="#projects" className={linkClass("projects")}>
        Proyectos
      </a>
    </li>

    <li>
      <a href="#about-me" className={linkClass("about-me")}>
        Sobre mí
      </a>
    </li>

    <li>
      <a href="#contact" className={linkClass("contact")}>
        Contacto
      </a>
    </li>
  </ul>

</nav>


);
}

export default Navbar;
