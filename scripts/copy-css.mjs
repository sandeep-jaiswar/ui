import fs from "fs/promises"
import path from "path"

const root = path.resolve("./src")
const out = path.resolve("./dist")

async function copyCss(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(dir, entry.name)
    const relPath = path.relative(root, srcPath)
    const destPath = path.join(out, relPath)

    if (entry.isDirectory()) {
      await copyCss(srcPath)
    } else if (entry.isFile() && srcPath.endsWith(".css")) {
      // Skip the global tailwind directives file; this file is for dev/Storybook only
      // and should not be copied to the published package.
      const relNormalized = relPath.replace(/\\/g, "/")
      if (relNormalized === "styles/global.css") continue
      await fs.mkdir(path.dirname(destPath), { recursive: true })
      await fs.copyFile(srcPath, destPath)
      console.log(`Copied ${srcPath} -> ${destPath}`)
    }
  }
}

async function main() {
  try {
    await fs.mkdir(out, { recursive: true })
    await copyCss(root)
    console.log("CSS copy complete")
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
