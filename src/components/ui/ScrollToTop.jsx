import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400); // aparece después del hero
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={goTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full 
        bg-slate-900/40 backdrop-blur-md border border-white/10
        text-pink-300 shadow-lg
        hover:scale-110 hover:text-pink-200 transition-all duration-300
        ${show ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;