import Link from "next/link"
import ReactMarkdown from "react-markdown"

interface Props {
  mdContent: string
  linksArr: {
    link: string
    value: string
  }[]
}

function PjExplanation({ mdContent, linksArr }: Props) {
  return (
    <article className="prose text-black/60 border-black max-w-6xl mt-10 text-base break-keep">
      <ReactMarkdown>{mdContent}</ReactMarkdown>
      <div>
        {linksArr.map(el => (
          <Link
            key={el.value}
            href={el.link}
            target="_blank"
            className="bg-black text-white mr-5 p-4 rounded-lg text-xl"
          >
            {el.value}
          </Link>
        ))}
      </div>
    </article>
  )
}

export default PjExplanation
