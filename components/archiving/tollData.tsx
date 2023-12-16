import { FaGithub } from "react-icons/fa"
import { SiVelog } from "react-icons/si"
// import { FaRegFilePdf } from "react-icons/fa6"

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
      "Javascript와 React에 내용이 주를 이루고 있습니다.",
    ],
    urlPath: "https://velog.io/@lee2302",
    path: "velog.io/@lee2302",
    des: (
      <p>
        <b>학습한 내용들을 기록하는 블로그</b>입니다.
      </p>
    ),
  },
  // {
  //   icon: <FaRegFilePdf size="50" />,
  //   name: "이력서.pdf",
  //   value: ["제가 개발자가 되기 위해 걸어온 이력을 기록해둔 pdf파일입니다."],
  //   urlPath: "",
  //   path: "이력서.pdf",
  //   des: (
  //     <p>
  //       <b>이력서</b>입니다.
  //     </p>
  //   ),
  // },
]
