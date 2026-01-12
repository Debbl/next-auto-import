import type { Arrayable, Awaitable } from '@antfu/utils'
import type {
  Import,
  InlinePreset,
  PackagePreset,
  ScanDirExportsOptions,
  UnimportOptions,
} from 'unimport'
import type { PresetName } from './presets'

export interface ImportLegacy {
  /**
   * @deprecated renamed to `as`
   */
  name?: string
  /**
   * @deprecated renamed to `name`
   */
  importName?: string
  /**
   * @deprecated renamed to `from`
   */
  path: string

  sideEffects?: SideEffectsInfo
}

export interface ImportExtended extends Import {
  sideEffects?: SideEffectsInfo
  __source?: 'dir' | 'resolver'
}

export type ImportNameAlias = [string, string]
export type SideEffectsInfo = Arrayable<ResolverResult | string> | undefined

export interface ResolverResult {
  as?: string
  name?: string
  from: string
}

export type ResolverFunction = (
  name: string,
) => Awaitable<
  string | ResolverResult | ImportExtended | null | undefined | void
>

export interface ResolverResultObject {
  type: 'component' | 'directive'
  resolve: ResolverFunction
}

/**
 * Given a identifier name, returns the import path or an import object
 */
export type Resolver = ResolverFunction | ResolverResultObject

/**
 * module, name, alias
 */
export type ImportsMap = Record<string, (string | ImportNameAlias)[]>

/**
 * Directory to search for import
 */
export interface ScanDir {
  glob: string
  types?: boolean
}

export type NormalizedScanDir = Required<ScanDir>

export type ESLintGlobalsPropValue =
  | boolean
  | 'readonly'
  | 'readable'
  | 'writable'
  | 'writeable'

export interface ESLintrc {
  /**
   * @default false
   */
  enabled?: boolean
  /**
   * Filepath to save the generated eslint config
   *
   * @default './.eslintrc-auto-import.json'
   */
  filepath?: string
  /**
   * @default true
   */
  globalsPropValue?: ESLintGlobalsPropValue
}

export interface BiomeLintrc {
  /**
   * @default false
   */
  enabled?: boolean
  /**
   * Filepath to save the generated eslint config
   *
   * @default './.eslintrc-auto-import.json'
   */
  filepath?: string
}

export interface Options {
  /**
   * Enable debug mode
   *
   * @default false
   */
  debug?: boolean

  /**
   * Preset names or custom imports map
   *
   * @default []
   */
  imports?: Arrayable<ImportsMap | PresetName | InlinePreset>

  /**
   * Local package presets.
   *
   * Register local installed packages as a preset.
   *
   * @default []
   * @see https://github.com/unplugin/unplugin-auto-import#package-presets
   */
  packagePresets?: (PackagePreset | string)[]

  /**
   * Identifiers to be ignored
   */
  ignore?: (string | RegExp)[]

  /**
   * These identifiers won't be put on the DTS file
   */
  ignoreDts?: (string | RegExp)[]

  /**
   * Inject the imports at the end of other imports
   *
   * @default true
   */
  injectAtEnd?: boolean

  /**
   * Options for scanning directories for auto import
   */
  dirsScanOptions?: Omit<ScanDirExportsOptions, 'cwd'>

  /**
   * Path for directories to be auto imported
   */
  dirs?: (string | ScanDir)[]

  /**
   * Pass a custom function to resolve the component importing path from the component name.
   *
   * The component names are always in PascalCase
   */
  resolvers?: Arrayable<Arrayable<Resolver>>

  /**
   * Parser to be used for parsing the source code.
   *
   * @see https://github.com/unjs/unimport#acorn-parser
   * @default 'regex'
   */
  parser?: UnimportOptions['parser']

  /**
   * Specifies the file path for generating the corresponding .d.ts file.
   * This option is enabled by default when `typescript` is installed locally.
   * Set to `false` to disable this feature.
   */
  dts?: string | boolean

  /**
   * Preserve the original file extensions in the generated .d.ts file.
   * Set to `true` to keep the extensions for .ts and .tsx files.
   * @default false
   */
  dtsPreserveExts?: boolean
}

export { PresetName }
