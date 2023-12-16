import Link from "next/link"
import React from "react"
import { iconArr } from "./tollData"

function Tool() {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:flex-row">
      {iconArr.map(el => (
        <Link
          key={el.name}
          href={el.urlPath}
          target="_blank"
          className="cursor-pointer w-[290px] md:w-[480px] xl:w-1/3 h-auto lg:h-[400px] xl: m-5 p-5 rounded-lg bg-white hover:scale-105 hover:ease-in hover:duration-300"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="">{el.icon}</div>
              <span className="lg:text-2xl xl:text-4xl font-sanskr font-bold">{el.name}</span>
            </div>
            <div className="text-xl" id="url-path">
              {el.path}
            </div>
            <div className="lg:text-lg xl:text-xl mt-5">{el.des}</div>
            <ul className="mt-5 pl-5">
              {el.value.map(el => (
                <li key={el} className=" lg:text-lg xl:text-xl text-lg mb-2 list-disc font-sanskr font-normal">
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
