import Image from "next/image"
import Carousel from "./Carousel"
import PjExplanation from "./PjExplanation"
import ProjectTitle from "./ProjectTitle"

interface Props {
  title: string
  info: string
  imagePathArr: string[]
  mdContent: string
  linkArr: {
    link: string
    value: string
  }[]
}

function Project({ title, info, imagePathArr, mdContent, linkArr }: Props) {
  return (
    <div className="bg-white p-10 max-w-2xl md:max-w-4xl lg:max-w-7xl h-auto flex flex-col items-center mb-20 rounded-xl ">
      <ProjectTitle title={title} info={info} />
      <div className="md:flex-row flex flex-col items-center md:items-start">
        {/* 캐러셀 */}
        <Carousel>
          {imagePathArr.map(path => (
            // flex-shrink-0을 통해서 원본크기 그대로 유지 => flex-row시에는 넓이에 맞추려 하기때문에 좁아지기 때문.
            <Image key={path} src={`${path}`} alt="gif" width={600} height={500} className="flex-shrink-0" />
          ))}
        </Carousel>
        {/* 프로젝트 소개 */}
        <PjExplanation mdContent={mdContent} linksArr={linkArr} />
      </div>
    </div>
  )
}

export default Project
