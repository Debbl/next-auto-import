import react from './react'
import reactDom from './react-dom'

export const presets = {
  'react': react,
  'react-dom': reactDom,
}

export type PresetName = keyof typeof presets
