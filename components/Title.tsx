interface Props {
  title: string
  id: string
  textColor: string
  borderColor: string
}

function Title({ title, id, borderColor, textColor }: Props) {
  return (
    <div id={id} className="mb-20 text-3xl lg:text-5xl">
      <span className={`border-b-4 border-${borderColor} font-sanskr font-bold text-${textColor}`}>{title}</span>
    </div>
  )
}

export default Title
