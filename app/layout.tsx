import "./globals.css"
import type { Metadata } from "next"
import Footer from "./pages/Footer"
import { notoSansKr, roboto } from "./font"
import Nav from "./pages/Nav"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" className={`${notoSansKr.variable} ${roboto.variable}`}>
      <body>
        <header>
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
