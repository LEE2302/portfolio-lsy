"use client"

import Link from "next/link"

function Nav() {
  const navArr = [
    { name: "About", path: "#about" },
    { name: "Archiving", path: "#archiving" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
  ]

  return (
    <nav className="w-full h-20 flex justify-center fixed top-0 z-50 border border-red-400">
      <div className="w-full max-w-screen-2xl flex items-center justify-between">
        <div className="text-3xl capitalize">
          <Link href={"/"}>이세영 포트폴리오</Link>
        </div>
        <ul className="flex">
          {navArr.map(el => (
            <li key={el.name} className="mr-3 text-3xl capitalize hover:text-green-500">
              <Link href={el.path}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
