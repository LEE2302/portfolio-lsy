import "./globals.css"
import type { Metadata } from "next"
import Footer from "./pages/Footer"
import { notoSansKr, roboto } from "./font"
import Nav from "./pages/Nav"

export const metadata: Metadata = {
  title: "Seyoung's Portfolio",
  description: "신입 개발자 이세영의 포트폴리오 페이지 입니다.",
  icons: {
    icon: '/images/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" className={`${notoSansKr.variable} ${roboto.variable}`}>
      <body className="w-full h-full box-border">
        <header className="flex items-center justify-center">
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
