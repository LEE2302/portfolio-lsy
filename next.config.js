// // import { PHASE_DEVELOPMENT_SERVER } from "next/constants"
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

// const debug = process.env.NODE_ENV !== "production"
// const repository = "https://lee2302.github.io/portfolio-lsy"

// const nextConfig = phase => {
//   console.log(debug)
//   // 개발서버인지 배포서버인지
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return
//   }

//   return {
//     reactStrictMode: true,
//     assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
//     trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
//     output: "export",
//   }
// }

// module.exports = nextConfig
