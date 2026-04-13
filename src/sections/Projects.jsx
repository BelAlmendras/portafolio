
const Projects = () => {

  const projects = [
    {
      name: "Project 1",
      description: "Web application built with React.",
      github: "#",
      demo: "#"
    },
    {
      name: "Project 2",
      description: "Backend API using Node.js.",
      github: "#",
      demo: "#"
    },
    {
      name: "Project 3",
      description: "Fullstack application.",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className=" text-slate-100 py-20 px-6">

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
                <h3 className="text-xl font-semibold mb-3">
                  {project.name}
                </h3>

                <p className="text-slate-300 mb-6">
                  {project.description}
                </p>
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