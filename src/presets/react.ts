import type { ImportsMap } from '../types'

export const CommonReactAPI = [
  'useState',
  'useCallback',
  'useMemo',
  'useEffect',
  'useRef',
  'useContext',
  'useReducer',
  'useImperativeHandle',
  'useDebugValue',
  'useDeferredValue',
  'useLayoutEffect',
  'useTransition',
  'startTransition',
  'useSyncExternalStore',
  'useInsertionEffect',
  'useId',
  'lazy',
  'memo',
  'createRef',
  'forwardRef',
] as const

export default {
  react: [
    ...CommonReactAPI,
    'cache',
    'cacheSignal',
    'createContext',
    'use',
    'useOptimistic',
    'useEffectEvent',
    'useActionState',
    'Fragment',
    'Suspense',
    'Activity',
  ],
} as const satisfies ImportsMap
