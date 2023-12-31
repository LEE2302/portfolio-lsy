# 🎥 <span style='background-color:#D0E4FC'>모영 - 영화검색을 통해 상영중인 근처 영화관을 찾아주는 검색&모집 플랫폼

## 🔗 <span style='background-color:black; color:white;'>Deployment URL</span>

- [배포링크](http://moyoung-toy-project.s3-website.ap-northeast-2.amazonaws.com/)
- [회고 블로그](https://velog.io/@lee2302/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0)
- [GitHub](https://github.com/mo-young-organization/moyoung-front)

## 📌 <span style='background-color:black; color:white;'>담당 페이지</span>

- 홈 화면 & 헤더바 & 푸터
- 회원가입&로그인
- 회원 정보 등록 페이지
- 영화 검색 페이지
- 영화 리스트 페이지
- 영화관 리스트 페이지
- 게시글 리스트 페이지
- 게시글 작성 페이지

## 📌 <span style='background-color:black; color:white;'>핵심 기능</span>

- **OAuth**로 쉽게 회원가입과 로그인을 할 수 있도록 했습니다.
- **React-hook-form**에 지원하는 유효성 검사를 통하여 모두 체크가 되어야지 등록이 되게 하였습니다.
- 닉네임 중복 검사를 통하여 유저들이 닉네임이 중복되지 않도록 하였습니다.
- 캐러셀UI가 자동으로 슬라이드가 되며 버튼을 통하여 수동으로 슬라이드가 가능합니다.
- 포스터 클릭시 해당 영화가 검색이 됩니다.
- 근처 상영중인 영화관 리스트가 뜹니다.
- 영화 기본정보와 필터, 상영중인 영화관 주소와 이름이 나열됩니다.
- 게시글 리스트 카드 호버시 영화 시간대, 영화 정보등 정보가 뜹니다.
- 영화 검색 거리 필터, 게시글 리스트 필터, 게시글 작성 페이지(영화 검색), 게시글 작성 페이지(영화관 리스트) - **Portal/Modal**

## ⭐️ <span style='background-color:black; color:white;'>Meaning</span>

기획부터 배포까지 진행한 두 번째 프로젝트입니다. 직접 백엔드와 디자인전공 지인을 모집하여 진행하였습니다. 토이 프로젝트를 통해 사용할 수 있는 스킬을 더욱 학습하고, 해보고 싶던 라이브러리와 UI디자인 패턴을 사용하는 것이 목적이었습니다.

- ### <span style='background-color:#fca5a5;'>Figma를 통해 디자이너와 협업을 경험했습니다.

피그마를 학습한 적이 있었고, 직접 와이드 프레임을 만든 적이 있습니다. 그래서 디자이너와 Figma를 통해 어려움 없이 협업을 진행할 수 있었습니다.

- ### <span style='background-color:#f87171;'>React-hook-form을 사용하여 input form을 관리하였습니다.

React-hook-form은 비제어 컴포넌트로 작동합니다. 하지만 제어 컴포넌트에 역할도 수행할 수 있기에 코드가 크게 줄어들고 그만큼 속도가 빨라진다는 장점이 있고, 한 번에 많은 input을 관리할 수 있기에 선택했습니다. 또한 프로젝트를 Typescript로 진행했는데 기본적으로 지원을 해주었기에 사용했습니다. React-hook-form을 사용함으로 5개의 컴포넌트에서 사용하였고, 총 15개 이상에 input을 관리 할 수 있었습니다.

- ### <span style='background-color:#fb923c;'>UI디자인 패턴인 Carousel UI를 라이브러리 없이 구현하였습니다.

Carousel UI에 가장 큰 장점은 다양한 콘텐츠를 한 공간에 제공하고, 유저들이 쉽게 콘텐츠를 확인할 수 있다는 점입니다. 그래서 영화 검색 페이지에 최신 영화 순위를 Carousel UI로 만들게 되었고, 유저가 넘기지 않아도 자동으로 slide 되도록 구현하였습니다. 라이브러리를 사용하는 방법도 있었지만, 직접 구현함으로 동작하는 방식을 알고 싶었고, Custom 용이하다는 점에 있어서 직접 구현하게 되었습니다. 구현을 통하여 CSS와 index를 활용한 함수에 대해 학습하게 되었습니다.

- ### <span style='background-color:#fbbf24;'>React-portal을 사용하여 Modal을 구현하였습니다.

Dom은 tree 구조를 가지게 되는데, Modal은 모든 화면 위에 떠 있어야 하는 UI이며 명시적으로도 최상단에 위치하는 것이 맞고, 최상단에 위치함으로 불필요한 렌더링과 번거로운 z-index 등 스타일링을 해주지 않아도 된다는 장점이 있습니다. 프로젝트에서 React-portal을 사용한 Modal은 총 4개입니다.

- ### <span style='background-color:#a3e635;'>모든 페이지를 반응형 웹 사이트로 구현하였습니다.

첫 프로젝트에서 진행해 보지 못한 것 중 가장 아쉬웠던 부분이며, 기획과 와이어 프레임부터 생각하고 진행해야지만 할 수 있겠다는 경험을 가지고 시작하게 되었습니다.
PC 화면(-1024)과 태블릿 화면(1023-768), 모바일화면(767-375)을 고려하여 반응형을 제작하였습니다. 구현하며 어려움은 큰 화면부터 구현을 시작하다보니 작은 화면으로 갈때 예기치 못한 동작들이 나왔습니다. 이런 경험을 토대로 다음 반응형 웹을 제작할 때는 작은 화면부터 점차 커지는 게 더 쉬울 수 있겠다는 생각을 가지게 되었고, 실제 협업에서 일하시는 분께 질문을 드리니 작은 화면부터 구현하기가 더 쉽다고 답을 들었습니다.

- ### <span style='background-color:#4ade80;'>OAuth로 JWT인증을 경험하였습니다.

회원가입과 로그인 기능을 구현을 OAuth로 하였고, 서버에서 보내준 인증 Token인 Access Token과 Refresh Token두개를 받아왔으며, react-cookie를 사용하여 쿠키에 저장을하였고, 만료 시간을 서버에서 보내준 시간으로 설정하여 특정 시간이 지나면 만료가 되도록 하였습니다. 또한 토큰이 만료되면 Refresh Token을 통하여 Access Token을 재발급 받도록 구현하였습니다.

- ### <span style='background-color:#22d3ee;'>Axios-create를 사용하여 instance, interceptors 반복되는 코드를 줄일 수 있었습니다.

Axios-create를 통해 BASE-URL 설정만으로도 편리하게 사용이 가능했습니다. 또한 interceptors 사용하여 request 시 Token을 헤더에 담을 수 있었고, 위에 얘기한 토큰이 만료되면 Refresh Token을 통하여 Access Token을 재발급받는 코드 또한 request 시 실행이 되도록 하였습니다.

- ### <span style='background-color:#cffafe;'>AxiosGithub-Action으로 CI/CD 파이프라인 구축을 했습니다.

작동 원리로는 .github/workflows 하위 경로에 .yml파일을 작성해야 하고, 작성 명렁어에 의해 특정 트리거가 발생 시 Actions가 실행이 됩니다. 이때 저는 Amazon-S3로 배포를 진행했기에 서로 연결을 진행해야 했습니다. 연결은 IAM 사용자 권한을 부여하고 생성 후 Access Key와 Secret Key를 Github-Repository/Secret에 Key를 저장합니다. 또한 EC2에 IAM 역할을 수정해주어 객체 형태로 권한을 지정해주면 마무리가 됩니다. 이때 주의할 내용은 .yml파일에서 Deploy 올라갈 파일 경로를 ./ 등 을 제외하고 대부분 root경로에 위치해 있기때문에 그대로 폴더이름만 적으면된다.
