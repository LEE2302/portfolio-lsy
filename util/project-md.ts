import fs from "fs"
import path from "path"

const projectMdDir = path.join(process.cwd(), "md")

// 각각 파일이름으로 데이터 가져오기
export function getProjectMd(fileName: string) {
  const filePath = path.join(projectMdDir, fileName)

  const fileContent = fs.readFileSync(filePath, "utf-8")

  return fileContent
}

// 모든 .md파일 읽어오기
export function getAllProjectMd() {
  const mdFiles = fs.readdirSync(projectMdDir)

  const allProjectMd = mdFiles.map(nameFile => {
    return getProjectMd(nameFile)
  })

  return allProjectMd
}
