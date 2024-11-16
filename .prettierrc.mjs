// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  semi: true,
  printWidth: 100,
  // pluginSearchDirs: false
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
