"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { FaRegHandPointLeft } from "react-icons/fa6"
import ProjectModal from "../modal/ProjectModal"
import { useState, useRef } from "react"
import Markdown from "../markdowns/Markdown"

interface Props {
  mdContent: string
  mdReadme: string
  linksArr: {
    link: string
    value: string
  }[]
}

function PjExplanation({ mdContent, mdReadme, linksArr }: Props) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // 모달 밖 영역 클릭시 닫기 함수
  function modalOutSideClick(e: React.MouseEvent<HTMLDivElement>) {
    // ref와 이벤트 타겟을 활용한 방법
    // ref.current와 e.target은 동일한 곳에 주면 그곳을 클릭했을시 동일하기 때문에 그 조건으로 처리

    if (modalRef.current === e.target) {
      setIsModalOpen(false)
    }
  }

  return (
    <article className="prose text-black/60 border-black max-w-6xl mt-10 text-xs md:text-sm break-keep">
      {/* <ReactMarkdown>{mdContent}</ReactMarkdown> */}
      <Markdown text={mdContent} />
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
        modalRef={modalRef}
        modalOutSideClick={modalOutSideClick}
      >
        {/* 마크다운 컴포넌트 */}
        <Markdown text={mdReadme} />
      </ProjectModal>
    </article>
  )
}

export default PjExplanation
