import Image from "next/image"

function SkillStackImg() {
  return (
    <div className="flex items-center md:flex-row flex-col">
      <div className="bg-white  md:mr-5 mb-5 p-5 rounded-lg">
        <Image src="/images/skill-left.png" alt="skill" width={300} height={400} />
      </div>
      <div className="bg-white md:ml-5 mt-5 p-5 rounded-lg">
        <Image src="/images/skill-right.png" alt="skill" width={300} height={400} />
      </div>
    </div>
  )
}

export default SkillStackImg
