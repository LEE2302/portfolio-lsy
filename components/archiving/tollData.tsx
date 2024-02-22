import { FaGithub } from "react-icons/fa"
import { SiVelog, SiNotion } from "react-icons/si"

export const iconArr = [
  {
    icon: <FaGithub size="50" />,
    name: "GitHub",
    value: [
      "프로그래머스 사이트에서 푼 알고리즘 문제를 구글 extension을 통해 commit을 하고 있습니다.",
      "협업 프로젝트를 저장하고 있으며 Readme를 보기 좋게 작성하려 합니다.",
      "영상 강의를 통해 배운 프로젝트와 혼자 진행한 프로젝트를 저장하고 있습니다.",
    ],
    urlPath: "https://github.com/LEE2302",
    path: "github.com/LEE2302",
    des: (
      <p>
        <b>코드 저장소</b>입니다.
      </p>
    ),
  },
  {
    icon: <SiVelog size="50" color="#20C997" />,
    name: "VELOG",
    value: [
      "부트캠프와 영상강의를 통해 학습한 내용을 정리합니다.",
      "팀/개인 프로젝트를 하며 어려웠던 내용과 새로 학습한 내용을 정리하며, 회고도 작성하고 있습니다.",
      "Javascript와 React의 내용이 주를 이루고 있습니다.",
    ],
    urlPath: "https://velog.io/@lee2302",
    path: "velog.io/@lee2302",
    des: (
      <p>
        <b>학습한 내용들을 기록하는 블로그</b>입니다.
      </p>
    ),
  },
  {
    icon: <SiNotion size="50" />,
    name: "노션 이력서",
    value: ["제가 개발자가 되기 위해 걸어온 이력을 기록한 문서입니다."],
    urlPath: "https://sulky-sage-5d2.notion.site/05124728650e4845b56dee6b297ebe22?pvs=4",
    path: "노션 이력서",
    des: (
      <p>
        <b>이력서</b>입니다.
      </p>
    ),
  },
]
