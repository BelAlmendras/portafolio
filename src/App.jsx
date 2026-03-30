
import './App.css'
import Home from "../src/assets/pages/Home.jsx"


function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">


  {/* estrellas */}
  <div className="stars"></div>
  <div className="stars slow"></div>
{/* contenido */}
  <div className="relative z-10">
    <Home />
  </div>

</div>
  )
}
export default App
