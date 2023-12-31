import Content from "@/components/introduce/Content"
import IntroTitle from "@/components/introduce/IntroTitle"
import { BsMouse } from "react-icons/bs"

function Introduce() {
  return (
    <section
      id="intro"
      className="w-full h-[600px] text-center pt-[80px] bg-intro-bg-image bg-cover bg-center relative"
    >
      <div className="p-10 flex justify-center items-center relative text-white">
        <div>
          <IntroTitle />
          <Content />
        </div>
      </div>
      <div className="text-white md:text-3xl lg:text-5xl flex flex-col justify-center items-center mouse-animation">
        <p className="md:text-xl lg:text-3xl mb-2">더 알아보기</p>
        <BsMouse />
      </div>
    </section>
  )
}

export default Introduce
