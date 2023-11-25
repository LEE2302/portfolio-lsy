import Tool from "@/components/archiving/Tool"

function Archiving() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center mb-20 bg-blue-400">
      <div id="archiving" className="mb-10 text-3xl lg:text-5xl">
        <span className="border-b-4 border-black font-sanskr font-bold">Archiving</span>
      </div>
      <div className="w-full max-w-screen-2xl bg-blue-400">
        <Tool />
      </div>
    </section>
  )
}

export default Archiving
