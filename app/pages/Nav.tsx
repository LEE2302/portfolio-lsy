"use client"

import HeaderList from "@/components/navbar/HeaderList"
import Logo from "@/components/navbar/Logo"
import { useEffect, useState } from "react"
import { IoIosMenu } from "react-icons/io"

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
            scrollPosition ? "hover:text-[#B31312]" : isdropMenu ? "hover:text-[#B31312]" : "hover:text-white"
          }`}
          onClick={dropMenuHandler}
        >
          <IoIosMenu size="30" />
        </button>
      </div>
    </nav>
  )
}

export default Nav
