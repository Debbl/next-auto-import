import { createAutoImport } from 'next-auto-import'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}

const withAutoImport = createAutoImport({
  imports: ['react'],
})

export default withAutoImport(nextConfig)
