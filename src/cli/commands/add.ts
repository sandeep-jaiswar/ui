import fs from "fs"
import path from "path"
import { type UIConfig } from "./init"
import { loadRegistry, resolveComponentDeps, type RegistryComponent } from "../utils/registry"
import { copyFiles } from "../utils/files"

const CONFIG_FILE = "ui.config.json"

function loadConfig(): UIConfig {
  if (!fs.existsSync(CONFIG_FILE)) {
    console.error(`\n  ❌  ${CONFIG_FILE} not found. Run \`npx @sandeep-jaiswar/ui init\` first.\n`)
    process.exit(1)
  }
  return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8")) as UIConfig
}

export async function add(componentNames: string[]) {
  console.log("\n  📦  @sandeep-jaiswar/ui — Add components\n")

  const config = loadConfig()
  const registry = await loadRegistry()

  // Resolve all requested components + their transitive deps
  const allItems = new Map<string, { files: string[]; type: string }>()

  for (const name of componentNames) {
    const resolved = resolveComponentDeps(name, registry)
    if (!resolved) {
      console.error(`  ❌  Component "${name}" not found. Run \`npx @sandeep-jaiswar/ui list\` to see available components.`)
      process.exit(1)
    }
    for (const [key, val] of resolved.entries()) {
      allItems.set(key, val)
    }
  }

  // Copy all files
  const srcRoot = path.join(__dirname, "../../../")
  let copied = 0

  for (const [name, { files, type }] of allItems.entries()) {
    const destDir = getDestDir(type, config)

    for (const file of files) {
      const srcPath = path.join(srcRoot, file)
      const destPath = path.join(destDir, path.basename(file))

      if (!fs.existsSync(srcPath)) {
        console.warn(`  ⚠️   Source file not found: ${srcPath}`)
        continue
      }

      copyFiles(srcPath, destPath)
      copied++
    }

    console.log(`  ✅  ${type}/${name}`)
  }

  console.log(`\n  🎉  Added ${allItems.size} item(s), ${copied} file(s) copied.\n`)
  console.log("  Remember to import the component's CSS in your stylesheet, or use a CSS bundler that handles CSS imports.\n")
}

function getDestDir(type: string, config: UIConfig): string {
  switch (type) {
    case "component":  return config.componentsDir
    case "hook":       return config.hooksDir
    case "utility":    return config.utilsDir
    case "primitive":  return config.primitivesDir
    default:           return config.componentsDir
  }
}
