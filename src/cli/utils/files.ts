import fs from "fs"
import path from "path"

/**
 * Copies a file from src to dest, creating parent directories if needed.
 * Skips if dest already exists (add --force flag to override).
 */
export function copyFiles(srcPath: string, destPath: string, force = false): void {
  const destDir = path.dirname(destPath)
  fs.mkdirSync(destDir, { recursive: true })

  if (!force && fs.existsSync(destPath)) {
    console.log(`  ⏭️   Skipped (already exists): ${destPath}`)
    return
  }

  fs.copyFileSync(srcPath, destPath)
}
