#!/usr/bin/env node
/**
 * @sandeep-jaiswar/ui CLI
 *
 * Add zero-dependency web components to your project.
 *
 * Usage:
 *   npx @sandeep-jaiswar/ui init
 *   npx @sandeep-jaiswar/ui add button
 *   npx @sandeep-jaiswar/ui add button dialog card
 *   npx @sandeep-jaiswar/ui list
 */

import { init } from "./commands/init"
import { add } from "./commands/add"
import { list } from "./commands/list"

const [, , command, ...args] = process.argv

async function main() {
  switch (command) {
    case "init":
      await init()
      break

    case "add":
      if (args.length === 0) {
        console.error("❌  Please specify at least one component. Example: npx @sandeep-jaiswar/ui add button")
        process.exit(1)
      }
      await add(args)
      break

    case "list":
      await list()
      break

    case "--help":
    case "-h":
    case undefined:
      printHelp()
      break

    default:
      console.error(`❌  Unknown command: "${command}"`)
      printHelp()
      process.exit(1)
  }
}

function printHelp() {
  console.log(`
  @sandeep-jaiswar/ui — Zero-dependency, copy-paste component library

  Usage:
    npx @sandeep-jaiswar/ui <command> [options]

  Commands:
    init              Set up ui.config.json and copy tokens.css to your project
    add <component>   Add one or more components (resolves dependencies automatically)
    list              List all available components

  Examples:
    npx @sandeep-jaiswar/ui init
    npx @sandeep-jaiswar/ui add button
    npx @sandeep-jaiswar/ui add button dialog card select
    npx @sandeep-jaiswar/ui list
`)
}

main().catch((err) => {
  console.error("❌ ", err.message)
  process.exit(1)
})
