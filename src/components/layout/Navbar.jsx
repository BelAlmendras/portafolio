import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "projects", "about-me", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const linkClass = (id) =>
  `transition-colors duration-300 ${
    active === id
      ? "text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
      : "text-slate-300 hover:text-pink-400 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
  }`;

  const handleClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between">

      {/* LOGO */}
      <h1 className="logo-text text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
        &lt;<span>BelenAlmendros</span> /&gt;
      </h1>

      {/* BOTÓN HAMBURGUESA */}
      <button
        className="md:hidden text-slate-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MENU DESKTOP */}
      <ul className="hidden md:flex gap-8">
        <li><a href="#home" onClick={handleClick} className={linkClass("home")}>Inicio</a></li>
        <li><a href="#projects" onClick={handleClick} className={linkClass("projects")}>Proyectos</a></li>
        <li><a href="#about-me" onClick={handleClick} className={linkClass("about-me")}>Sobre mí</a></li>
        <li><a href="#contact" onClick={handleClick} className={linkClass("contact")}>Contacto</a></li>
      </ul>

      {/* MENU MOBILE */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full 
bg-slate-900/60 backdrop-blur-md 
flex flex-col items-center gap-6 py-6 
md:hidden shadow-lg 
rounded-b-2xl border border-white/10">
          <li><a href="#home" onClick={handleClick} className={linkClass("home")}>Inicio</a></li>
          <li><a href="#projects" onClick={handleClick} className={linkClass("projects")}>Proyectos</a></li>
          <li><a href="#about-me" onClick={handleClick} className={linkClass("about-me")}>Sobre mí</a></li>
          <li><a href="#contact" onClick={handleClick} className={linkClass("contact")}>Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;