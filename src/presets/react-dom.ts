import type { ImportsMap } from '../types'

export default {
  'react-dom': [
    'useFormStatus',
    'createPortal',
    'flushSync',
    'preconnect',
    'prefetchDNS',
    'preinit',
    'preinitModule',
    'preload',
    'preloadModule',
  ],
} as const satisfies ImportsMap
