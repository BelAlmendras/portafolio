import Navbar from "../../components/layout/Navbar"
import Hero from "../../sections/Hero"
import Footer from "../../components/layout/Footer"
import AboutMe from "../../sections/AboutMe"
import Skills from "../../sections/Skills"
import Projects from "../../sections/Projects"
import Contact from "../../sections/Contact"
import ScrollToTop from "../../components/ui/ScrollToTop"

function Home() {
  return (
  <>
  <Navbar />
        <Hero />
        <ScrollToTop />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
</>
        
  )
}

export default Home