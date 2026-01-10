import { createAutoImport } from 'next-auto-import'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}

const withAutoImport = createAutoImport({
  imports: [
    'react',
    'react-dom',
    {
      twl: ['cn'],
    },
  ],
})

export default withAutoImport(nextConfig)
