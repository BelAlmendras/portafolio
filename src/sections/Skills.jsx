import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs 
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> }
  ];

  return (
    <section className="bg-slate-900 text-slate-100 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 hover:bg-slate-700 transition flex flex-col items-center gap-3"
            >

              <div className="text-4xl text-indigo-400">
                {skill.icon}
              </div>

              <p className="font-semibold">
                {skill.name}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;