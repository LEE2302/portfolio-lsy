import Image from "next/image"

function Skills() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center mb-20 bg-blue-400">
      <div id="skills" className="mb-10 text-5xl">
        <span className="border-b-4 border-black font-sanskr font-bold">Skills</span>
      </div>
      <div className="flex items-center">
        <div className="bg-white mr-5 p-5 rounded-lg">
          <Image src="/images/skill-left.png" alt="skill" width={300} height={400} />
        </div>
        <div className="bg-white ml-5 p-5 rounded-lg">
          <Image src="/images/skill-right.png" alt="skill" width={300} height={400} />
        </div>
      </div>
    </section>
  )
}

export default Skills
