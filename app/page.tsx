import About from "./pages/About"
import Skills from "./pages/Skills"
import Introduce from "./pages/Introduce"
import Projects from "./pages/Projects"
import Archiving from "./pages/Archiving"

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <Introduce />
      <About />
      <Archiving />
      <Skills />
      <Projects />
    </section>
  )
}
