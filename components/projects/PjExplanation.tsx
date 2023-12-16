"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { FaRegHandPointLeft } from "react-icons/fa6"
import ProjectModal from "../modal/ProjectModal"
import { useState } from "react"

interface Props {
  mdContent: string
  linksArr: {
    link: string
    value: string
  }[]
}

function PjExplanation({ mdContent, linksArr }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <article className="prose text-black/60 border-black max-w-6xl mt-10 text-xs md:text-sm break-keep">
      <ReactMarkdown>{mdContent}</ReactMarkdown>
      <div className="mb-10 flex items-center">
        <button
          className="bg-black text-white mr-5 p-4 rounded-lg text-sm md:text-xl"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          자세히 보기
        </button>
        <div className="flex click-animation text-xl">
          <div className="mr-2">
            <FaRegHandPointLeft />
          </div>
          <span>Click!!</span>
        </div>
      </div>
      <div>
        {linksArr.map(el => (
          <Link
            key={el.value}
            href={el.link}
            target="_blank"
            className="bg-black text-white mr-5 p-4 rounded-lg text-sm md:text-xl"
          >
            {el.value}
          </Link>
        ))}
      </div>
      <ProjectModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
      >
        여기에 이제 리드미 내용
      </ProjectModal>
    </article>
  )
}

export default PjExplanation
