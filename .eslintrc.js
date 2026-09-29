/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "unicorn/consistent-function-scoping": "error",
    "unicorn/consistent-destructuring": "error",
    "unused-imports/no-unused-imports": "error",
    // 'perfectionist/sort-named-imports': 'off',
    "react/jsx-no-useless-fragment": "error",
    // 'perfectionist/sort-object-types': 'off',
    // 'perfectionist/sort-union-types': 'off',
    // 'perfectionist/sort-interfaces': 'off',
    // 'perfectionist/sort-jsx-props': 'off',
    "unicorn/catch-error-name": "error",
    // 'perfectionist/sort-imports': 'off',
    // 'perfectionist/sort-objects': 'off',
    // 'perfectionist/sort-exports': 'off',
    "react/self-closing-comp": "error",
    "react/react-in-jsx-scope": "off",
    "unicorn/better-regex": "error",
    "unicorn/no-lonely-if": "error",
    "react/jsx-fragments": "error",
    "prettier/prettier": "error"
  },
  extends: [
    "plugin:perfectionist/recommended-line-length",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals"
  ],
  ignorePatterns: [
    "pnpm-lock.yaml",
    "node_modules",
    "social.ts",
    "public",
    ".next",
    "out"
  ],
  plugins: [
    "@typescript-eslint",
    "unused-imports",
    "perfectionist",
    "prettier",
    "unicorn"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 12
  },
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser"
};
