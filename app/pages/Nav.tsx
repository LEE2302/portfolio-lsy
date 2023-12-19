"use client"

import HeaderList from "@/components/navbar/HeaderList"
import Logo from "@/components/navbar/Logo"
import { useEffect, useState } from "react"
import { IoIosMenu } from "react-icons/io"
import { BsArrowUpSquareFill } from "react-icons/bs"

function Nav() {
  // 네브바 스크롤 파악하기 위한 코드
  const [scrollPosition, setScrollPosition] = useState(false)

  // document not defined라는 에러를 뱉었다 => next ssr때문이라는 그를 봤고 useEffect로 감싸줌
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY
      // y축(세로)으로 스크롤범위가 100px이 넘으면 true 안되면 false
      if (scrollY >= 100) {
        setScrollPosition(true)
      } else {
        setScrollPosition(false)
      }
    })
  })

  const [isdropMenu, setIsDropMenu] = useState(false)

  function dropMenuHandler() {
    setIsDropMenu(!isdropMenu)
  }

  // 클릭시 맨 위로 올라가기
  function MoveToTop() {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className={`w-full h-20 fixed top-0 z-50 flex justify-center font-roboto font-bold ${
        scrollPosition ? "bg-white " : "text-white/50"
      } ${isdropMenu ? "bg-white text-black" : ""}`}
    >
      <div className="w-full max-w-6xl flex items-center justify-between">
        <Logo scrollPosition={scrollPosition} isdropMenu={isdropMenu} />
        <HeaderList scrollPosition={scrollPosition} isdropMenu={isdropMenu} setIsDropMenu={setIsDropMenu} />
        <button
          className={`mr-5 z-10 block md:hidden ${
            scrollPosition
              ? "hover:text-[#B31312]"
              : isdropMenu
                ? "hover:text-[#B31312] text-black"
                : "hover:text-white"
          }`}
          onClick={dropMenuHandler}
        >
          <IoIosMenu size="30" />
        </button>
      </div>
      <button
        className={`${scrollPosition ? "uparrow-animation fixed top-[90%] right-[5%] text-4xl block" : "hidden"}`}
        onClick={MoveToTop}
      >
        <BsArrowUpSquareFill color="#84cc16" />
      </button>
    </nav>
  )
}

export default Nav
