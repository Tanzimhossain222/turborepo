module.exports = {
  root: true,
  extends: [
    "@repo/typescript-config/library.js"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
  }
}