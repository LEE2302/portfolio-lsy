"use client"

import Link from "next/link"
import { useState } from "react"

function Nav() {
  const navArr = [
    { name: "About", path: "#about" },
    { name: "Archiving", path: "#archiving" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
  ]

  // 네브바 스크롤 파악하기 위한 코드
  const [scrollPosition, setScrollPosition] = useState(false)

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    // y축(세로)으로 스크롤범위가 100px이 넘으면 true 안되면 false
    if (scrollY >= 100) {
      setScrollPosition(true)
    } else {
      setScrollPosition(false)
    }
  })

  return (
    <nav
      className={`w-full h-20 flex justify-center fixed top-0 z-10 font-roboto font-bold  ${
        scrollPosition ? "bg-white " : "text-white/50"
      }`}
    >
      <div className="w-full max-w-screen-2xl flex items-center justify-between">
        <div
          className={`text-xl md:text-2xl lg:text-3xl capitalize  ${
            scrollPosition ? "hover:text-[#B31312]" : "hover:text-white"
          }`}
        >
          <Link href={"/"}>{`LSY's PORTFOLIO`} </Link>
        </div>
        <ul className="flex">
          {navArr.map(el => (
            <li
              key={el.name}
              className={`mr-5 text-xl md:text-2xl lg:text-3xl capitalize hover:text-white ${
                scrollPosition ? "hover:text-[#B31312]" : "hover:text-white"
              }`}
            >
              <Link href={el.path}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
