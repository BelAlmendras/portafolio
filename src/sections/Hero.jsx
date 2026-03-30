function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="text-center md:text-left">

<h1 className="logo-text text-3xl md:text-4xl font-bold tracking-wide
  bg-linear-to-r from-pink-400 via-fuchsia-500 to-rose-400
  bg-clip-text text-transparent inline-block
  animate-[gradient-x_4s_ease-in-out_infinite]">
  
  &lt;BelenAlmendros /&gt;
</h1>
<p class="font-body text-muted mt-2 text-lg">
  Desarrolladora Fullstack
</p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">

            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Github
            </button>

            <button className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition">
              LinkedIn
            </button>

          </div>

        </div>

        {/* Foto */}
        <div className="flex justify-center">

          <img
            src="./src/assets/images/perfil.png"
            alt="Belen Almendros"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
