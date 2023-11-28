interface Props {
  title: string
  id: string
}

function Title({ title, id }: Props) {
  return (
    <div id={id} className="mb-10 text-3xl lg:text-5xl">
      <span className="border-b-4 border-black font-sanskr font-bold">{title}</span>
    </div>
  )
}

export default Title
