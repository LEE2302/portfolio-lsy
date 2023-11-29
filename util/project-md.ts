import fs from "fs"
import path from "path"

const projectMdDir = path.join(process.cwd(), "md")

function getProjectMd(fileName: string) {
  const filePath = path.join(projectMdDir, fileName)

  const fileContent = fs.readFileSync(filePath, "utf-8")

  return fileContent
}

export function getAllProjectMd() {
  const mdFiles = fs.readdirSync(projectMdDir)

  const allProjectMd = mdFiles.map(nameFile => {
    return getProjectMd(nameFile)
  })

  return allProjectMd
}


