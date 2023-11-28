interface Props {
  title: string
  info: string
}

function ProjectTitle({ title, info }: Props) {
  return (
    <div className="text-center mb-5">
      <p className="font-sanskr font-bold text-3xl">{title}</p>
      <p className="font-sanskr text-gray-600">{info}</p>
    </div>
  )
}

export default ProjectTitle
