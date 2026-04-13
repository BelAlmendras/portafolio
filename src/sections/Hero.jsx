import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
    >
      {/* Fondo glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
          bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 
          opacity-20 blur-3xl rounded-full"
        ></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* TEXTO */}
        <div className="text-center md:text-left space-y-6">
          {/* TÍTULO */}
          <h1
            className="logo-text text-5xl md:text-5xl font-bold tracking-wide
  bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-400
  bg-clip-text text-transparent inline-block
  animate-[gradient-x_4s_ease-in-out_infinite]
  animate-fadeUp"
          >
            &lt;BelenAlmendros /&gt;
          </h1>

          {/* SUBTÍTULO */}
          <p
            className="font-body text-slate-300 text-xl md:text-2xl
            opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]"
          >
            Desarrolladora Fullstack
          </p>

          {/* DESCRIPCIÓN */}
          <p
            className="font-body text-slate-400 max-w-md mx-auto md:mx-0
            opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]"
          >
            Creo experiencias digitales que combinan código, creatividad y
            emoción.
          </p>

          {/* BOTONES */}
          <div
            className="flex gap-4 justify-center md:justify-start pt-2
            opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]"
          >
            <a
    href="#"
    className="flex items-center justify-center gap-2 
    min-w-37.5 px-6 py-3 rounded-xl 
    bg-linear-to-r from-purple-600 to-fuchsia-600 
    text-white! drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-medium whitespace-nowrap
    hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
    transition-all duration-300 active:scale-95"
  >
    <GithubLogo size={20} weight="fill" />
    <span>Github</span>
  </a>
 <a
    href="#"
    className="flex items-center justify-center gap-2 
    min-w-37.5 px-6 py-3 rounded-xl 
    bg-slate-800/60 backdrop-blur-md 
    border border-white/10 text-white whitespace-nowrap
    hover:bg-slate-700/60 hover:scale-105
    transition-all duration-300 active:scale-95"
  >
    <LinkedinLogo size={20} weight="fill" />
    <span>LinkedIn</span>
  </a>
          </div>
        </div>

        {/* FOTO */}
        <div
          className="relative flex justify-center
          opacity-0 scale-100 animate-[fadeScale_1s_ease-out_0.5s_forwards]"
        >
          <div
            className="absolute w-72 h-72 md:w-80 md:h-80 
            bg-linear-to-r from-purple-500 via-fuchsia-500 to-pink-500 
            blur-3xl opacity-40 rounded-full animate-pulse"
          ></div>

          <img
            src="./src/assets/images/perfil.png"
            alt="Belen Almendros"
            className="relative w-64 h-64 md:w-72 md:h-72 
            object-cover rounded-full 
            border-2 border-white/10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
