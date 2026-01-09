# next-auto-import

Auto-import generator for Next.js projects. Automatically scans your directories and generates TypeScript declarations for global auto-imports, inspired by [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import).

## Features

- 🚀 Automatically scan directories for exports
- 📝 Generate TypeScript declaration files
- 🔄 Watch mode in development
- ⚡ Zero runtime overhead
- 🎯 Full TypeScript support

## Installation

```bash
pnpm add next-auto-import
# or
npm install next-auto-import
# or
yarn add next-auto-import
```

## Usage

### Basic Setup

In your `next.config.js` or `next.config.mjs`:

```js
import { withAutoImport } from 'next-auto-import'

const nextConfig = {
  // your next config
}

const withAutoImport = createAutoImport({
  imports: ['react'],
})

export default withAutoImport(nextConfig)
```

### TypeScript Configuration

Make sure to include the generated `.d.ts` file in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ... other options
  },
  "include": ["auto-imports.d.ts", "**/*.ts", "**/*.tsx"]
}
```

## Related

- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) - The original auto-import plugin for Vite, Webpack, Rollup, and more

## License

MIT
