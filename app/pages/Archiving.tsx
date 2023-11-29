import Title from "@/components/Title"
import Tool from "@/components/archiving/Tool"

function Archiving() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center bg-[#161A30]">
      <Title title="Archiving" id="archiving" borderColor="white" textColor='white'/>
      <div className="w-full max-w-screen-2xl break-keep">
        <Tool />
      </div>
    </section>
  )
}

export default Archiving
