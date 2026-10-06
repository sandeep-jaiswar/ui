import { loadRegistry } from "../utils/registry"

export async function list() {
  const registry = await loadRegistry()

  console.log("\n  📋  @sandeep-jaiswar/ui — Available components\n")

  // Group by category
  const byCategory = new Map<string, typeof registry.components>()
  for (const comp of registry.components) {
    const cat = comp.category ?? "other"
    if (!byCategory.has(cat)) byCategory.set(cat, [])
    byCategory.get(cat)!.push(comp)
  }

  for (const [category, components] of byCategory.entries()) {
    console.log(`  ${capitalize(category)}`)
    for (const comp of components) {
      const deps = comp.registryDependencies?.length ? ` (deps: ${comp.registryDependencies.join(", ")})` : ""
      console.log(`    • ${comp.name.padEnd(22)} ${comp.description}${deps}`)
    }
    console.log()
  }

  console.log("  Hooks")
  for (const hook of registry.hooks ?? []) {
    console.log(`    • ${hook.name.padEnd(22)} ${hook.description}`)
  }

  console.log()
  console.log("  Usage:")
  console.log("    npx @sandeep-jaiswar/ui add <component>")
  console.log("    npx @sandeep-jaiswar/ui add button dialog card\n")
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
