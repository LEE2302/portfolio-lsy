import { getProjectMd } from "@/util/project-md"

//  친환경 데이터
export const imageSrcPathArr = [
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

// export const myEcoStoryContent = getAllProjectMd()[1]
export const myEcoStoryContent = getProjectMd("myecostorymd.md")

export const ecoLinkArr = [
  {
    link: "https://velog.io/@lee2302/%EB%A9%94%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
    value: "회고 블로그",
  },
  {
    link: "https://github.com/codestates-seb/seb43_main_007",
    value: "GitHub",
  },
  {
    link: "http://ourecostory.s3-website.ap-northeast-2.amazonaws.com/",
    value: "배포 링크",
  },
]

// 모영 데이터
export const imageMoYoungArr = [
  "/images/projects/moyoung/moyoung1.png",
  "/images/projects/moyoung/moyoung2.png",
  "/images/projects/moyoung/moyoung3.png",
  "/images/projects/moyoung/moyoung4.gif",
  "/images/projects/moyoung/moyoung5.png",
  "/images/projects/moyoung/moyoung6.png",
  "/images/projects/moyoung/moyoung7.png",
  "/images/projects/moyoung/moyoung8.gif",
  "/images/projects/moyoung/moyoung9.png",
  "/images/projects/moyoung/moyoung10.png",
  "/images/projects/moyoung/moyoung11.png",
  "/images/projects/moyoung/moyoung12.png",
  "/images/projects/moyoung/moyoung13.png",
]

export const moyoungContent = getProjectMd("moyoungmd.md")

export const moyoungLinkArr = [
  {
    link: "https://velog.io/@lee2302/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
    value: "회고 블로그",
  },
  {
    link: "https://github.com/mo-young-organization/moyoung-front",
    value: "GitHub",
  },
  {
    link: "http://moyoung-toy-project.s3-website.ap-northeast-2.amazonaws.com/",
    value: "배포 링크",
  },
]

// 모영 데이터
export const imagePortfolioArr = [
  "/images/projects/portfolio/pofol1.png",
  "/images/projects/portfolio/pofol2.png",
  "/images/projects/portfolio/pofol3.png",
  "/images/projects/portfolio/pofol4.png",
]

export const portfolioContent = getProjectMd("portfoliomd.md")

export const portfolioLinkArr = [
  {
    link: "https://velog.io/@lee2302/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4",
    value: "회고 블로그",
  },
  {
    link: "https://github.com/LEE2302/portfolio-lsy",
    value: "GitHub",
  },
  {
    link: "https://portfolio-lsy.vercel.app/",
    value: "배포 링크",
  },
]
