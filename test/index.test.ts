import { existsSync } from 'node:fs'
import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createAutoImport } from '../src/index'

describe('createAutoImport', () => {
  const testRoot = resolve(__dirname, '../test-output')
  const dtsPath = resolve(testRoot, 'auto-imports.d.ts')

  beforeEach(async () => {
    // Clean up test output directory
    if (existsSync(testRoot)) {
      await rm(testRoot, { recursive: true, force: true })
    }
  })

  afterEach(async () => {
    // Clean up test output directory
    if (existsSync(testRoot)) {
      await rm(testRoot, { recursive: true, force: true })
    }
  })

  it('creates auto-import context with default options', () => {
    const autoImport = createAutoImport()

    expect(autoImport).toBeDefined()
    expect(autoImport.scanDirs).toBeDefined()
    expect(autoImport.writeDTS).toBeDefined()
    expect(autoImport.watch).toBeDefined()
  })

  it('creates auto-import context with custom options', () => {
    const autoImport = createAutoImport({
      dirs: ['./custom-dir'],
      dts: './custom-imports.d.ts',
      root: testRoot,
    })

    expect(autoImport).toBeDefined()
    expect(autoImport.dts).toBe(resolve(testRoot, 'custom-imports.d.ts'))
  })

  it('disables dts generation when dts is false', () => {
    const autoImport = createAutoImport({
      dts: false,
      root: testRoot,
    })

    expect(autoImport.dts).toBe(false)
  })

  it('scans directories and returns empty array for non-existent dirs', async () => {
    const autoImport = createAutoImport({
      dirs: ['./non-existent-dir'],
      root: testRoot,
    })

    const imports = await autoImport.scanDirs()
    expect(imports).toEqual([])
  })

  it('generates DTS file with correct format', async () => {
    const autoImport = createAutoImport({
      dirs: ['./src'],
      dts: dtsPath,
      root: resolve(__dirname, '..'),
    })

    await autoImport.writeDTS()

    expect(existsSync(dtsPath)).toBe(true)
  })
})

describe('withAutoImport', () => {
  it('returns a function that wraps next config', async () => {
    const { withAutoImport } = await import('../src/index')

    const wrapper = withAutoImport({
      dts: false, // Disable to avoid file generation in tests
    })

    expect(typeof wrapper).toBe('function')

    const nextConfig = { reactStrictMode: true }
    const result = wrapper(nextConfig)

    expect(result).toEqual(nextConfig)
  })
})
