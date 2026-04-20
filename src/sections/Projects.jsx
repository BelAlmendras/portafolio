const Projects = () => {
  const projects = [
    {
      name: "Escuelita Libre",
      image: "https://raw.githubusercontent.com/BelAlmendras/portafolio/main/escuelita-libre.png",
      description:
        "Desarrollé la interfaz de un sitio educativo enfocada en una experiencia accesible y atractiva para nuevos apoderados y estudiantes. Implementado con React, Tailwind y Vite, prioricé un diseño limpio, intuitivo y orientado a la conversión.",
      github: "#",
      demo: "#",
    },
    {
      name: "Joyeria Hoseki",
      image: "https://raw.githubusercontent.com/BelAlmendras/portafolio/main/hoseki.png",
      description:
        "Proyecto fullstack desarrollado en equipo bajo metodología ágil (Scrum). Participé en la construcción del frontend con React y en la integración con backend en Spring Boot y base de datos PostgreSQL, colaborando en la implementación de un flujo completo de e-commerce.",
      github: "#",
      demo: "#",
    },
    {
      name: "¿Quién es ese Pokémon?",
      image: "https://raw.githubusercontent.com/BelAlmendras/portafolio/main/pokemon.png",
      description:
        "Minijuego inspirado en “¿Quién es ese Pokémon?” que consume la API de Pokémon. Implementé la ocultación y revelado de sprites mediante interacción del usuario, junto con efectos visuales para generar una experiencia lúdica y dinámica",
      github: "#",
      demo: "#",
    },
  ];

  return (
  <section id="projects" className="text-slate-100 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 text-center mb-12">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 hover:bg-slate-700 transition flex flex-col justify-between"
          >
            <div>
          
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>

              <p className="text-slate-300 mb-6">{project.description}</p>
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
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
