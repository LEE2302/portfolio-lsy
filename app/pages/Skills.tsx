import Title from "@/components/Title"
import SkillStackImg from "@/components/skills/SkillStackImg"

function Skills() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center bg-[#B6BBC4]">
      <Title title="Skills" id="skills" borderColor="white" textColor="white" />
      <SkillStackImg />
    </section>
  )
}

export default Skills
