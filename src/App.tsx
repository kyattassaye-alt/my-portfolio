import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
function App(){
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      </main>

    );
}

export default App