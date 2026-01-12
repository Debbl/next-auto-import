import { createContext } from './core/ctx'
import type { NextConfig } from 'next'
import type { Options } from './types'

/**
 * Creates a Next.js auto-import context
 */
export function createAutoImport(options: Options = {}) {
  const ctx = createContext(options)

  ctx.writeConfigFiles()

  return (nextConfig: NextConfig = {}): NextConfig => {
    return {
      ...nextConfig,
      experimental: {
        ...nextConfig.experimental,
        swcPlugins: [
          [
            'swc-plugin-auto-import',
            {
              imports: options.imports,
              debug: options.debug,
            },
          ],
          ...(nextConfig.experimental?.swcPlugins ?? []),
        ],
      },
    }
  }
}
