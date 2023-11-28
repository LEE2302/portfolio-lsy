import Title from "@/components/Title"
import SkillStackImg from "@/components/skills/SkillStackImg"

function Skills() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center mb-20 bg-blue-400">
      <Title title="Skills" id="skills" />
      <SkillStackImg />
    </section>
  )
}

export default Skills
