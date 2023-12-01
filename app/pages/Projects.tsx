import Title from "@/components/Title"
import Carousel from "@/components/projects/Carousel"
import PjExplanation from "@/components/projects/PjExplanation"
import ProjectTitle from "@/components/projects/ProjectTitle"
import {
  ecoLinkArr,
  imageMoYoungArr,
  imagePortfolioArr,
  imageSrcPathArr,
  moyoungContent,
  moyoungLinkArr,
  myEcoStoryContent,
  portfolioContent,
  portfolioLinkArr,
} from "@/data/projects/projectsData"
import Image from "next/image"

function Projects() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center bg-[#31304D]">
      <Title title="Projects" id="projects" borderColor="white" textColor="white" />
      {/* 나만의 친환경 프로젝트*/}
      <div className="bg-white p-10 max-w-2xl md:max-w-4xl lg:max-w-7xl h-auto flex flex-col items-center mb-20 rounded-xl ">
        <ProjectTitle title={"나만의 친환경"} info="2023.05 | 6인 프로젝트" />
        {/* 캐러셀 */}
        <Carousel>
          {imageSrcPathArr.map(path => (
            // flex-shrink-0을 통해서 원본크기 그대로 유지 => flex-row시에는 넓이에 맞추려 하기때문에 좁아지기 때문.
            <Image key={path} src={`${path}`} alt="gif" width={600} height={500} className="flex-shrink-0" />
          ))}
        </Carousel>
        {/* 프로젝트 소개 */}
        <PjExplanation mdContent={myEcoStoryContent} linksArr={ecoLinkArr} />
      </div>
      {/* 모영 프로젝트 */}
      <div className="bg-white p-10 max-w-7xl h-auto flex flex-col items-center rounded-xl mb-20">
        <ProjectTitle title={"모영"} info="2023.07 | 4인 프로젝트" />
        {/* 캐러셀 */}
        <Carousel>
          {imageMoYoungArr.map(path => (
            // flex-shrink-0을 통해서 원본크기 그대로 유지 => flex-row시에는 넓이에 맞추려 하기때문에 좁아지기 때문.
            <Image key={path} src={path} alt="gif" width={600} height={500} className="flex-shrink-0" />
          ))}
        </Carousel>
        {/* 프로젝트 소개 */}
        <PjExplanation mdContent={moyoungContent} linksArr={moyoungLinkArr} />
      </div>
      {/* 포트폴리오 프로젝트 */}
      <div className="bg-white p-10 max-w-7xl h-auto flex flex-col items-center rounded-xl">
        <ProjectTitle title={"이세영-Portfolio"} info="2023.11 | 1인 프로젝트" />
        {/* 캐러셀 */}
        <Carousel>
          {imagePortfolioArr.map(path => (
            // flex-shrink-0을 통해서 원본크기 그대로 유지 => flex-row시에는 넓이에 맞추려 하기때문에 좁아지기 때문.
            <Image key={path} src={path} alt="gif" width={600} height={500} className="flex-shrink-0" />
          ))}
        </Carousel>
        {/* 프로젝트 소개 */}
        <PjExplanation mdContent={portfolioContent} linksArr={portfolioLinkArr} />
      </div>
    </section>
  )
}

export default Projects
