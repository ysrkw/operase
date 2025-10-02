// @ts-check
import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'
import unicorn from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['.next/**/*', 'dist/**/*', 'next-env.d.ts', 'package-lock.json']),
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
      tailwindcss.configs['flat/recommended'],
    ],
    files: ['**/*.{js,mjs,jsx,ts,mts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        cssConfigPath: 'app/globals.css',
      },
    },
  },
  {
    extends: [
      json.configs.recommended,
    ],
    files: ['**/*.json'],
    language: 'json/json',
  },
  {
    extends: [
      markdown.configs.recommended,
    ],
    files: ['**/*.md'],
    language: 'markdown/gfm',
  },
])
