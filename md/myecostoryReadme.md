# 🌳 <span style='background-color:#dcffe4'>나만의 친환경 - 친환경 생활 실천을 공유하고 공감하는 우리들의 커뮤니티

## 🔗 <span style='background-color:black; color:white;'>Deployment URL

- [배포링크]()
- [회고 블로그](https://velog.io/@lee2302/%EB%A9%94%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0)
- [GitHub](https://github.com/codestates-seb/seb43_main_007)

## 📌 <span style='background-color:black; color:white;'>담당 페이지

- 게시글 목록 페이지
- 게시글 작성 페이지
- 마이페이지/내가 쓴 글

## 📌 <span style='background-color:black; color:white;'>핵심 기능

- 검색기능, 카테고리별 목록 리스트, 페이지네이션, 좋아요&북마크 버튼 등 api요청과 응답을 통하여 Restful API를 경험할 수 있었습니다.
- 텍스트 에디터(Quill)를 사용하여 WYSIWYG방법을 경험해 볼 수 있었고, 이미지를 서버와 통신하기 위해서 사용한 formData 또한 학습할 수 있었습니다.
- 불필요한 생성을 막기위해 모든 입력란은 비어 있으며 안되며, 이미지가 있어야만 등록이 되도록 유효성 검사를 하였습니다.
- 마이페이지-내가 쓴 글에서는 서버에서 post-id를 받아와 글&댓글을 클릭하면 해당 게시글로 이동할 수 있게 하였습니다.

## ⭐️ <span style='background-color:black; color:white;'>Meaning

기획부터 배포까지 진행한 첫 프로젝트이며, 부트캠프에서 진행한 메인 프로젝트입니다. 백엔드와 프론트엔드 각 3명씩 조를 이루어 진행했습니다.

- ### <span style='background-color:#818cf8;'>Git을 사용하여 다른 사람들과 협업을 진행했습니다.

많이 쓰이는 git 용어들을 사용하며 학습했으며, 코드의 통일성과 소통이 중요하다는 것을 많이 배웠습니다. 저희 팀은 시간을 정하여 매일 회의를 진행하였고, 그 덕분에 충돌이 있어도 빠른 시간 안에 해결할 수 있었습니다.
**프론트엔드와 협업**시에는 팀원들과 개발 초기에 회의를 통해 **ESlint**와 **Prettier**를 설정하였고, 코드 컨벤션을 통일함으로 충돌을 최소화할 수 있었습니다.

- ### <span style='background-color:#e879f9;'>Restful API에 대해 이해를 하는 시간이 되었습니다.

**백엔드와 협업**을 하며 기능구현을 위해 AIP 통신을 하였고, 그로 인해 학습한 내용을 실제로 사용을 해보며 CRUD를 경험하였고, 어떠한 상황에서 사용이 되는지를 정확하게 학습하게 되었습니다.

- ### <span style='background-color:#94a3b8;'>빠른 개발 환경을 경험하였습니다.

esbuild와 Native ESM을 사용하는 **Vite**로 개발을 진행하였고, 보다 빠른 개발환경을 경험할 수 있었습니다.

- ### <span style='background-color:#fb7185;'>Typescript를 왜 사용하는지 알게 되었습니다.

**JavaScript** 기반의 **정적 타입** 문법을 추가한 **TypeScript**를 사용하여 컴파일하는 과정에서 사전에 에러를 찾아낼 수 있었습니다. 그로 인해 예기치 못한 에러를 사전에 방지할 수 있어 비록 타입을 설정하는 데 시간이 걸릴지 몰라도 에러를 발견하고 처리하는 시간을 생각해 보았을 때 타입을 지정하여 에러를 방지하는 것이 더 빠르다고 생각했습니다.

- ### <span style='background-color:#f472b6;'>CSS-in-JS를 경험했습니다.

React 환경에서 컴포넌트라는 장점을 살리고 JS코드 안에서 작성할 수 있는 **CSS-in-JS**스타일로서 **Styled-Components** 사용하였습니다. 동적으로 CSS를 처리하기도 편했고, 한 코드에서 이루어지다 보니 코드를 보기에도 편했습니다. 가장 큰 장점은 className을 따로 생각하지 않아도 된다는 것이 좋았습니다.
