import fs from "fs"
import path from "path"
import readline from "readline"
import { fileURLToPath } from "url"

const CONFIG_FILE = "ui.config.json"

export interface UIConfig {
  componentsDir: string
  hooksDir: string
  utilsDir: string
  tokensPath: string
  primitivesDir: string
  typescript: boolean
}

const defaults: UIConfig = {
  componentsDir: "src/components/ui",
  hooksDir: "src/hooks",
  utilsDir: "src/utils",
  primitivesDir: "src/primitives",
  tokensPath: "src/styles/ui-tokens.css",
  typescript: true,
}

function prompt(question: string, fallback: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  return new Promise((resolve) => {
    rl.question(`${question} (${fallback}): `, (answer) => {
      rl.close()
      resolve(answer.trim() || fallback)
    })
  })
}

export async function init() {
  console.log("\n  🎨  @sandeep-jaiswar/ui — Initialize\n")

  if (fs.existsSync(CONFIG_FILE)) {
    console.log(`  ✅  ${CONFIG_FILE} already exists. Skipping init.\n`)
    return
  }

  console.log("  Configure your project (press Enter to accept defaults):\n")

  const componentsDir = await prompt("  Components directory", defaults.componentsDir)
  const hooksDir = await prompt("  Hooks directory", defaults.hooksDir)
  const utilsDir = await prompt("  Utils directory", defaults.utilsDir)
  const primitivesDir = await prompt("  Primitives directory", defaults.primitivesDir)
  const tokensPath = await prompt("  Tokens CSS path", defaults.tokensPath)

  const config: UIConfig = {
    componentsDir,
    hooksDir,
    utilsDir,
    primitivesDir,
    tokensPath,
    typescript: true,
  }

  // Write config
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2) + "\n")
  console.log(`\n  ✅  Created ${CONFIG_FILE}`)

  // Copy tokens.css
  const __file = fileURLToPath(import.meta.url)
  const base = path.dirname(__file)
  const tokensSrc = path.join(base, "../../tokens/tokens.css")
  if (fs.existsSync(tokensSrc)) {
    fs.mkdirSync(path.dirname(tokensPath), { recursive: true })
    fs.copyFileSync(tokensSrc, tokensPath)
    console.log(`  ✅  Copied tokens.css → ${tokensPath}`)
  } else {
    console.warn(`  ⚠️   Could not find tokens.css at ${tokensSrc}. Copy it manually.`)
  }

  // Copy cn.ts utility
  const cnSrc = path.join(base, "../../utils/cn.ts")
  if (fs.existsSync(cnSrc)) {
    fs.mkdirSync(utilsDir, { recursive: true })
    fs.copyFileSync(cnSrc, path.join(utilsDir, "cn.ts"))
    console.log(`  ✅  Copied cn.ts → ${utilsDir}/cn.ts`)
  }

  console.log(`
  Next steps:
    1. Import tokens in your root CSS:
       @import "${tokensPath}";

    2. Set data-theme on <html> for dark mode:
       <html data-theme="dark">

    3. Add components:
       npx @sandeep-jaiswar/ui add button
  `)
}
