# 🎥 <span style='background-color:black; color:white'>PortFolio - 프론트엔드 이세영

## 🔗 <span style='background-color:black; color:white'>Deployment URL

- [배포링크](https://portfolio-lsy.vercel.app/)
- [회고 블로그](https://velog.io/@lee2302/series/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4)
- [GitHub](https://github.com/LEE2302/portfolio-lsy)

## 📌 <span style='background-color:black; color:white'>담당 페이지

- 홈화면
  - Navbar
  - Archiving
  - Skills
  - Projects

## 📌 <span style='background-color:black; color:white'>핵심 기능

- 맨 위에 고정함으로 유저가 보다 편리하게 사용할 수 있도록 했습니다.
- 스크롤이 맨위에 위치할 경우 배경색은 투명이 되고, 스크롤로 내리면 색을 주어 유저로서 편리하게 볼 수 있도록 하였습니다.
- Router를 사용하여 문구 클릭시 그 위치로 이동을 합니다.
- 저의 학습도구들을 Link를 걸어 클릭시 이동하여 확인가능하게 했습니다.
- 아이콘들을 사진으로 모아두어 편리하게 볼 수 있도록 했습니다.
- 캐러셀을 사용하여 각각 프로젝트에서 구현한 페이지들을 볼 수 있도록 하였습니다.
- Markdown파일(.md)을 React-markdown을 사용하여 깔끔하게 표현하였습니다.
- potal을 이용하여 Modal을 구현하였습니다.

## ⭐️<span style="background-color:black; color: white">Meaning<span>

- ### <span style="background-color:#fff5b1">Next.js통해 첫 프로젝트에 사용해보고 학습하였습니다.<span>

강의를 듣고 처음 나의 코드에 적용을 해보는 시간이였습니다. 동작하는 방식이 React와 다르다 보니 헷갈렸지만 적응을 하고 이해를 하니 크게 어려움이 없었고, Next.js에 최적화 면에서 매우 뛰어나다는 것을 알게되었습니다. 또한 CSR과 SSR을 지원하면서 SEO를 위한 렌더링이 지원한다는것에 신기했습니다. 포트폴리오 사이트는 웹 페이지가 하나밖에 없기 때문에 서버에 요청을 하지 않아 SSR과 SSG같은 기능은 사용하지 않습니다. 하지만 Next.js문법을 학습하는 목적에 있었고, 다른 최적화 기능을 사용하며 배울 수 있었습니다. 더 학습을 통하여 SSR과 SSG기능도 사용하며 Next.js 위대함을 느껴보고 싶습니다.

- ### <span style='background-color:#ffdce0'>Tailwind.CSS를 사용하며 편리함을 느꼈습니다.</span>

Tailwind.CSS는 Next.js와 사용이 많이 된다하여 학습목적으로 사용했습니다. Tailwind 또한 처음에는 문법이 익숙하지 않아 어려움이 있었습니다. 하지만 공식사이트에 검색기능을 통하여 사용하고 싶은 CSS속성을 찾아가며 학습하였고, 적응을 하고 이해를 하니 편리함을 느낄 수 있었습니다. className을 지정하지 않고 바로 사용이 가능하다는 장점과 반응형 디자인이 매우 쉽게 가능하다는 점에서 매력을 느낄 수 있었습니다. 허나 단점또한 존재했고 혼자서는 가능하지만 다른 개발자들과 협업시 어려움이 있겠다는 생각을 했고, 코드가 길어짐으로 가독성이 크게 떨어진다는 점이였습니다.

- ### <span style='background-color:#dcffe4'>Vercel배포로 쉽게되는 자동 배포를 경험했습니다.</span>

Vercel로 배포를 처음 진행했습니다. 이전 까지는 Amazon-S3와 Github-Action을 사용하여 배포를 진행하였는데, 너무 쉽게 Github-Repository와 Vercel을 연결만 하면 수정사항 push시 인식하고 자동으로 Build하여 배포를 해준다는 정말 큰 편리함이 있었습니다.

- ### <span style='background-color:#f5f0ff'>React-markdown을 사용하여 Project를 꾸몄습니다.</span>

React-markdown을 사용하여 .md파일을 fs읽어와서 Project 설명을 구현하였습니다. Tailwind에 기본 css초기화 설정이 있어서, prose설정과 React-markdown plugin을 사용하여 코드조각과 html문법 사용할 수 있도록 설정하였습니다.
