import { Roboto, Noto_Sans_KR } from "next/font/google" // 원하는 폰트 가져와서 사용하기

// 폰트 적용
export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sanskr",
  weight: ["100", "200", "300", "400", "500", "700", "900"],
})

export const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
})
