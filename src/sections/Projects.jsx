const Projects = () => {
  const projects = [
    {
      name: "Escuelita Libre",
      image: "/escuelita-libre.png",
      description:
        "Desarrollé la interfaz de un sitio educativo enfocada en una experiencia accesible y atractiva para nuevos apoderados y estudiantes. Implementado con React, Tailwind y Vite, prioricé un diseño limpio, intuitivo y orientado a la conversión.",
      github: "https://github.com/BelAlmendras/escuelita-libre-ui",
      demo: "#",
    },
    {
      name: "Joyeria Hoseki",
      image: "/hoseki.jpg",
      description:
        "Proyecto fullstack desarrollado en equipo bajo metodología ágil (Scrum). Participé en la construcción del frontend con React y en la integración con backend en Spring Boot y base de datos PostgreSQL, colaborando en la implementación de un flujo completo de e-commerce.",
      github: "https://github.com/BelAlmendras/SA-HA/",
      demo: "https://hoseki.vercel.app/",
    },
    {
      name: "¿Quién es ese Pokémon?",
      image: "/quien-es-ese-pokemon.png",
      description:
        "Minijuego inspirado en “¿Quién es ese Pokémon?” que consume la API de Pokémon. Implementé la ocultación y revelado de sprites mediante interacción del usuario, junto con efectos visuales para generar una experiencia lúdica y dinámica",
      github: "https://github.com/BelAlmendras/quien-es-ese-pokemon/",
      demo: "https://quien-es-ese-pokemon-nine.vercel.app/",
    },
  ];

return (
  <section id="projects" className="text-slate-100 py-20 px-6 ">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-center mb-12">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative bg-gradient-to-br from-slate-800/80 to-indigo-900/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 hover:shadow-purple-500/20 transition flex flex-col justify-between overflow-hidden"
          >
            
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>

            <div>
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover rounded-lg border border-white/10"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>

             <p className="text-slate-300 mb-6">{project.description}</p>
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="flex items-center justify-center gap-2 
              px-5 py-3 rounded-xl 
              bg-gradient-to-r from-purple-600 to-fuchsia-600 
              text-white! font-medium
              md:hover:scale-105 transition-all"
              >
                GitHub
              </a>

              <a
                href={project.demo}
className="flex items-center justify-center gap-2 
              px-5 py-3 rounded-xl 
              bg-slate-800/60 backdrop-blur-md 
              border border-white/10 text-white!
              md:hover:bg-slate-700/60 md:hover:scale-105
              transition-all"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Projects;
