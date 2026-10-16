import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
function App(){
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <main>
        <h1>My Portfolio</h1>
      </main>
    </>
    )
}

export default App