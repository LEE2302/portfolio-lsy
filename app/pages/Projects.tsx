import Title from "@/components/Title"
import Project from "@/components/projects/Project"

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
  myEcoStoryReadme,
  moyoungReadme,
  portfolioReadme,
} from "@/data/projects/projectsData"

function Projects() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center bg-[#31304D]">
      <Title title="Projects" id="projects" borderColor="white" textColor="white" />
      <Project
        title={"나만의 친환경"}
        info="2023.05 | 6인 프로젝트"
        imagePathArr={imageSrcPathArr}
        mdContent={myEcoStoryContent}
        mdReadme={myEcoStoryReadme}
        linkArr={ecoLinkArr}
      />
      <Project
        title={"모영"}
        info="2023.07 | 4인 프로젝트"
        imagePathArr={imageMoYoungArr}
        mdContent={moyoungContent}
        mdReadme={moyoungReadme}
        linkArr={moyoungLinkArr}
      />
      <Project
        title={"이세영-Portfolio"}
        info="2023.11 | 1인 프로젝트"
        imagePathArr={imagePortfolioArr}
        mdContent={portfolioContent}
        mdReadme={portfolioReadme}
        linkArr={portfolioLinkArr}
      />
    </section>
  )
}

export default Projects
