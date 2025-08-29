// @ts-check
import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'
import vitest from '@vitest/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint'

export default tseslint.config([
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      stylistic.configs.recommended,
      perfectionist.configs['recommended-natural'],
      unicorn.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
      vitest.configs.recommended,
    ],
    files: ['**/*.{js,ts}'],
    ignores: [".next/**/*", "next-env.d.ts"],
    settings: {
      react: {
        version: "detect",
      }
    }
  },
  {
    extends: [
      json.configs.recommended
    ],
    files: ['**/*.json'],
    ignores: ["package-lock.json"],
    language: 'json/json',
  },
  {
    extends: [
      markdown.configs.recommended
    ],
    files: ['**/*.md'],
    language: 'markdown/gfm',
  }
])
