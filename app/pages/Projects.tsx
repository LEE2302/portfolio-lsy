import Title from "@/components/Title"
import Carousel from "@/components/projects/Carousel"
import ProjectTitle from "@/components/projects/ProjectTitle"
import Image from "next/image"

function Projects() {
  const imageSrcPathArr = [
    "/images/projects/myecostory/eco1.gif",
    "/images/projects/myecostory/eco2.gif",
    "/images/projects/myecostory/eco3.gif",
    "/images/projects/myecostory/eco4.gif",
    "/images/projects/myecostory/eco5.gif",
    "/images/projects/myecostory/eco6.png",
    "/images/projects/myecostory/eco7.gif",
    "/images/projects/myecostory/eco8.gif",
    "/images/projects/myecostory/eco9.gif",
  ]

  return (
    <section className="w-full py-20 flex flex-col justify-center items-center mb-20 bg-blue-400">
      <Title title="Projects" id="projects" />
      <div className="bg-red-400 p-10 max-w-7xl h-auto flex flex-col items-center">
        <ProjectTitle title={"나만의 친환경"} info="2022.05 | 6인 프로젝트" />
        {/* 캐러셀 */}
        <Carousel>
          {imageSrcPathArr.map(path => (
            // flex-shrink-0을 통해서 원본크기 그대로 유지 => flex-row시에는 넓이에 맞추려 하기때문에 좁아지기 때문.
            <Image key={path} src={path} alt="gif" width={600} height={500} className="flex-shrink-0" />
          ))}
        </Carousel>
        {/* 프로젝트 소개 */}
        <div className="max-w-6xl">
          <div>프로젝트 소개</div>
          <p>
            노래방을 즐기는 사람의 입장에서 자주 부르는 노래를 간편하게 관리할 수 있도록 도와주는 웹사이트입니다. 제
            취미가 아이디어의 원천이었고, 저와 취미가 같은 사람들에게 도움이 되었으면 하는 마음으로 개발했습니다.
            Firebase 서비스를 처음 사용해봤다는 것만으로도 의미가 있었지만, 그 과정에서 OAuth 2.0의 개념을 한 번 더 깊게
            다지고 NoSQL을 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다. 최근에 인기가 많은 Tailwind CSS를
            처음으로 사용해보며 이것의 차별적인 유용성을 느낄 수 있었고, 동시에 PostCSS가 무엇인지 배우는 계기도
            되었습니다. 이론으로만 알고 있던 PWA를 실제로 구현해봄으로써 앞으로 웹 생태계가 뻗어나갈 무한한 가능성과
            확장성을 몸소 체감할 수 있었습니다.
          </p>
          <div>주요 기능</div>
          <p>1. 주저리 주저리 검색기능 주저리 주저리 검색검색 기능</p>
          <p>2. 주저리 주저리 검색기능 주저리 주저리 검색검색 기능</p>
          <p>3. 주저리 주저리 검색기능 주저리 주저리 검색검색 기능</p>
          <p>4. 주저리 주저리 검색기능 주저리 주저리 검색검색 기능</p>
          <div>사용 스킬</div>
          <div>React, TypeScript, JavaScript, HTML, CSS, Styled-Components</div>
        </div>
      </div>
    </section>
  )
}

export default Projects
