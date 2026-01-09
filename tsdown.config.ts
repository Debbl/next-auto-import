import { defineConfig } from 'tsdown'

export default defineConfig({
  sourcemap: true,
  format: ['esm', 'cjs'],
  dts: { sourcemap: true },
  exports: true,
})
