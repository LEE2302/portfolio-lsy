import Title from "@/components/Title"
import Tool from "@/components/archiving/Tool"

function Archiving() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center mb-20 bg-blue-400">
      <Title title="Archiving" id='archiving'/>
      <div className="w-full max-w-screen-2xl bg-blue-400">
        <Tool />
      </div>
    </section>
  )
}

export default Archiving
