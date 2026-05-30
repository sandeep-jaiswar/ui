import path from "path"
import fs from "fs"

export interface RegistryItem {
  name: string
  description: string
  files: string[]
  registryDependencies?: string[]
  category?: string
  cssVariables?: string[]
}

export interface Registry {
  version: string
  components: RegistryItem[]
  hooks: RegistryItem[]
  utilities: RegistryItem[]
  primitives: RegistryItem[]
  tokens: { file: string; description: string }
}

export type RegistryComponent = RegistryItem

let _registry: Registry | null = null

export async function loadRegistry(): Promise<Registry> {
  if (_registry) return _registry

  // Try local registry.json first (dev mode or after publish)
  const localPath = path.join(__dirname, "../../../../registry/registry.json")
  if (fs.existsSync(localPath)) {
    _registry = JSON.parse(fs.readFileSync(localPath, "utf-8")) as Registry
    return _registry
  }

  throw new Error(
    "Registry not found. Make sure you are running this CLI from the @sandeep-jaiswar/ui package."
  )
}

type ResolvedItem = { files: string[]; type: string }

/**
 * Recursively resolves a component and all its registry dependencies.
 * Returns a map of name → { files, type } for all items that need to be copied.
 */
export function resolveComponentDeps(
  name: string,
  registry: Registry,
  visited = new Set<string>()
): Map<string, ResolvedItem> | null {
  if (visited.has(name)) return new Map()
  visited.add(name)

  const result = new Map<string, ResolvedItem>()

  // Search across all categories
  const allItems: Array<{ item: RegistryItem; type: string }> = [
    ...registry.components.map((i) => ({ item: i, type: "component" })),
    ...registry.hooks.map((i) => ({ item: i, type: "hook" })),
    ...(registry.utilities ?? []).map((i) => ({ item: i, type: "utility" })),
    ...(registry.primitives ?? []).map((i) => ({ item: i, type: "primitive" })),
  ]

  const found = allItems.find(({ item }) => item.name === name)

  if (!found) return null

  result.set(name, { files: found.item.files, type: found.type })

  // Recursively resolve dependencies
  for (const dep of found.item.registryDependencies ?? []) {
    const depResolved = resolveComponentDeps(dep, registry, visited)
    if (depResolved) {
      for (const [k, v] of depResolved.entries()) {
        if (!result.has(k)) result.set(k, v)
      }
    }
  }

  return result
}
