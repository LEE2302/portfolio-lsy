import Link from "next/link"

interface Props {
  scrollPosition: boolean
}

function Logo({ scrollPosition }: Props) {
  return (
    <div
      className={`ml-5 text-xl md:text-xl lg:text-2xl capitalize ${
        scrollPosition ? "hover:text-[#B31312]" : "hover:text-white"
      }`}
    >
      <Link href={"/"}>{`LSY's PORTFOLIO`} </Link>
    </div>
  )
}

export default Logo
