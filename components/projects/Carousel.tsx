"use client"

import React, { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

interface Props {
  children: React.ReactNode[]
}

function Carousel({ children: slides }: Props) {
  // 현재 페이지
  const [curr, setCurr] = useState(0)

  // 이전 , 다음 클릭 함수
  const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1))

  return (
    <div className="w-[36rem] md:w-[50rem] lg:w-[72rem] bg-black flex justify-center rounded-lg relative">
      {/* 버튼 div */}
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <FaArrowLeft />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <FaArrowRight />
        </button>
      </div>
      {/* 칠드런 => 슬라이드 */}
      <div className="flex overflow-hidden w-[600px] h-[500px]">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
      </div>
      {/* 밑에 보여주는 div */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurr(i)}
              role="button"
              key={i}
              className={`
            transition-all w-3 h-3 bg-black rounded-full ${curr === i ? "p-2" : "bg-opacity-50"} cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
