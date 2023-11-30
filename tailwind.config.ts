import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Introduce.tsx에서 사용 ex) bg-intro-image
        "intro-bg-image": "url('/images/intro/introbackground.jpg')",
      },
      // 폰트 패밀리 => 폰트 적용 ex) font-roboto
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        sanskr: ["var(--font-sanskr)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
