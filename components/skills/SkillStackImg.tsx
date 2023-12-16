// import PortfolioContext from "@/context/context";
// import { useContext } from "react";
import Image from "next/image"

function SkillStackImg() {
  // const { prefix } = useContext(PortfolioContext);

  return (
    <div className="flex items-center justify-center md:flex-row flex-col">
      <div className="bg-white  md:mr-5 p-5 rounded-lg hover:scale-105 hover:ease-in hover:duration-300">
        {/* <Image src={`${prefix}/images/skills/skill-left.png`} alt="skill" width={300} height={400} /> */}
        <Image src={`/images/skills/skill-left.png`} alt="skill" width={300} height={400} />
      </div>
      <div className="bg-white md:ml-5 p-5 rounded-lg hover:scale-105 hover:ease-in hover:duration-300">
        {/* <Image src={`${prefix}/images/skills/skill-right.png`} alt="skill" width={300} height={400} /> */}
        <Image src={`/images/skills/skill-right.png`} alt="skill" width={300} height={400} />
      </div>
    </div>
  )
}

export default SkillStackImg
