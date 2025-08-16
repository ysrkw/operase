# Setup

[Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)を使用して開発環境を構築します。

## Usage

コンテナ上で開発を行うためには、以下の手順に従ってください。

```bash
# 依存関係のインストール
npm install

# Vitestによるテストの実行
npm test

# TypeScriptの型チェック（出力ファイルは生成されません）
npm run tsc

# ESLintによるコードの静的解析
npm run lint

# ESLintによるコードの自動修正
npm run fmt
```
