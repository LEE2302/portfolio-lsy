import Link from "next/link"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

interface Props {
  scrollPosition: boolean
  isdropMenu: boolean
  setIsDropMenu: Dispatch<SetStateAction<boolean>>
}

function HeaderList({ scrollPosition, isdropMenu, setIsDropMenu }: Props) {
  console.log(scrollPosition, isdropMenu)

  // 각각 네브바 목록 배열
  const navArr = [
    { name: "About", path: "#about" },
    { name: "Archiving", path: "#archiving" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
  ]

  // 모바일 화면에서 드롭다운시 li클릭할때 라우터이동과 드롭다운 닫기
  const router = useRouter()
  function menuDropdownClickHandler(path: string) {
    if (isdropMenu === true) {
      router.push(path)
      setIsDropMenu(!isdropMenu)
    }
  }

  return (
    <ul className={`flex ${isdropMenu ? "flex-col absolute text-center top-[80px] bg-white w-full" : "flex"}`}>
      {navArr.map(el => (
        <li
          onClick={() => menuDropdownClickHandler(el.path)}
          key={el.name}
          className={`${
            isdropMenu ? "block" : ""
          }hidden md:block mr-5 text-xl md:text-lg lg:text-xl capitalize cursor-pointer  ${
            scrollPosition
              ? isdropMenu
                ? "hover:text-white hover:bg-[#B31312] h-10 mr-0 flex justify-center items-center"
                : "hover:text-[#B31312]"
              : isdropMenu
                ? "hover:text-white hover:bg-[#B31312] h-10 mr-0 flex justify-center items-center text-black"
                : "hover:text-white"
          }`}
        >
          <Link href={el.path}>{el.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default HeaderList
