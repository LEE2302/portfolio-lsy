// import Explanation from '@/components/about/Explanation/Explanation';
import Info from "@/components/about/Info/Info"

function About() {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-20 mb-20">
      <div id="about" className="mb-10 text-5xl">
        <span className="border-b-4 border-black">About Me</span>
      </div>
      <div className="w-full h-60 max-w-screen-2xl flex  flex-col  justify-center items-center rounded-lg bg-white">
        <Info />
      </div>

      {/* <div className="w-4/6 h-[500px] bg-white ml-5 rounded-lg p-8">
          <Explanation />
        </div> */}
    </section>
  )
}

export default About
