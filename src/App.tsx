import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
function App(){
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <main>
        <h1>My Portfolio</h1>
      </main>
    </>
    )
}

export default App