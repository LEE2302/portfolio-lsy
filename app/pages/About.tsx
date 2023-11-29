// import Explanation from '@/components/about/Explanation/Explanation';
import Title from "@/components/Title"
import Info from "@/components/about/Info/Info"

function About() {
  return (
    <section className="w-full h-[500px] flex flex-col justify-center items-center">
      <Title title="About Me" id="about" borderColor="black" textColor="black" />
      <div className="w-full max-w-screen-2xl flex flex-col justify-center items-center rounded-lg bg-white">
        <Info />
      </div>
    </section>
  )
}

export default About
