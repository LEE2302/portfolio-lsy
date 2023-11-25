import SkillStackImg from "@/components/skills/SkillStackImg"

function Skills() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center mb-20 bg-blue-400">
      <div id="skills" className="mb-10 text-5xl">
        <span className="border-b-4 border-black font-sanskr font-bold">Skills</span>
      </div>
      <SkillStackImg />
    </section>
  )
}

export default Skills
