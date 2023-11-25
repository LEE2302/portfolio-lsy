// import Explanation from '@/components/about/Explanation/Explanation';
import Info from "@/components/about/Info/Info"

function About() {
  return (
    <section className="w-full h-[500px] flex flex-col justify-center items-center mt-20 mb-20">
      <div id="about" className="mb-10 text-2xl md:text-3xl lg:text-5xl">
        <span className="border-b-4 border-black font-sanskr font-bold">About Me</span>
      </div>
      <div className="w-full max-w-screen-2xl flex flex-col justify-center items-center rounded-lg bg-white">
        <Info />
      </div>
    </section>
  )
}

export default About
