import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import perfil from "/perfil.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 md:px-6 relative overflow-hidden"
    >
      {/* Fondo glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 
          w-[300px] h-[300px] md:w-[500px] md:h-[500px] 
          bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 
          opacity-20 blur-2xl md:blur-3xl rounded-full
          md:animate-pulse"
        ></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* TEXTO */}
        <div className="text-center md:text-left space-y-5">
          
          <h1
            className="logo-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide
            bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-400
            bg-clip-text text-transparent inline-block
            md:animate-[gradient-x_4s_ease-in-out_infinite]
            motion-reduce:animate-none"
          >
            &lt;BelenAlmendros /&gt;
          </h1>

          <p
            className="text-slate-300 text-lg md:text-2xl
            md:opacity-0 md:translate-y-4
            md:animate-[fadeUp_0.6s_ease-out_0.2s_forwards]
            motion-reduce:animate-none"
          >
            Desarrolladora Fullstack
          </p>

          <p
            className="text-slate-400 max-w-md mx-auto md:mx-0 text-sm md:text-base
            md:opacity-0 md:translate-y-4
            md:animate-[fadeUp_0.6s_ease-out_0.4s_forwards]
            motion-reduce:animate-none"
          >
          Desarrolladora Frontend con especialización en React, experiencia fullstack y una fuerte orientación al diseño de experiencias digitales
          </p>

          {/* BOTONES */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2
            md:opacity-0 md:translate-y-4
            md:animate-[fadeUp_0.6s_ease-out_0.6s_forwards]
            motion-reduce:animate-none"
          >
            
            <a
              href="#"
              className="flex items-center justify-center gap-2 
              px-5 py-3 rounded-xl 
              bg-gradient-to-r from-purple-600 to-fuchsia-600 
              text-white! font-medium
              md:hover:scale-105 transition-all"
            >
              <GithubLogo size={18} weight="fill" />
              Github
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-2 
              px-5 py-3 rounded-xl 
              bg-slate-800/60 backdrop-blur-md 
              border border-white/10 text-white
              md:hover:bg-slate-700/60 md:hover:scale-105
              transition-all"
            >
              <LinkedinLogo size={18} weight="fill" />
              LinkedIn
            </a>

          </div>
        </div>

        {/* FOTO */}
        <div
          className="relative flex justify-center mt-6 md:mt-0
          md:opacity-0 md:scale-95
          md:animate-[fadeScale_0.8s_ease-out_0.5s_forwards]
          motion-reduce:animate-none"
        >
          
          <div
            className="absolute w-48 h-48 md:w-80 md:h-80 
            bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 
            blur-2xl md:blur-3xl opacity-40 rounded-full"
          ></div>

          <img
            src={perfil}
            alt="Belen Almendros"
            className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 
            object-cover rounded-full 
            border border-white/10 shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;