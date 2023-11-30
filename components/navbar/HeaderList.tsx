import Link from "next/link"

interface Props {
  scrollPosition: boolean
}

function HeaderList({ scrollPosition }: Props) {
  const navArr = [
    { name: "About", path: "#about" },
    { name: "Archiving", path: "#archiving" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
  ]

  return (
    <ul className="flex">
      {navArr.map(el => (
        <li
          key={el.name}
          className={`mr-5 text-xl md:text-lg lg:text-xl capitalize ${
            scrollPosition ? "hover:text-[#B31312]" : "hover:text-white"
          }`}
        >
          <Link href={el.path}>{el.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default HeaderList
