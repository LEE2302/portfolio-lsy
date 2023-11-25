import Link from "next/link"
import React from "react"
import { iconArr } from "./tollData"

function Tool() {
  return (
    <div className="w-full first:flex flex-col justify-between items-center xl:flex-row ">
      {iconArr.map(el => (
        <Link
          key={el.name}
          href={el.path}
          target="_blank"
          className="cursor-pointer w-[450px] xl:w-1/3 h-[400px] m-5 p-5 rounded-lg bg-white"
        >
          <div className="">
            <div className="flex items-center gap-3 mb-5">
              <div>{el.icon}</div>
              <span className="text-4xl font-sanskr font-bold">{el.name}</span>
            </div>
            <div className="text-xl" id="url-path">
              {el.path}
            </div>
            <div className="text-xl mt-5">{el.des}</div>
            <ul className="mt-5 pl-5">
              {el.value.map(el => (
                <li key={el} className=" md:text-xl text-lg mb-5 list-disc font-sanskr font-normal">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Tool
