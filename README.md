# operase

このリポジトリにはEditorConfigが導入されています。

## EditorConfig について

EditorConfigは、異なるエディタやIDE間でコーディング規約を統一するためのツールです。プロジェクトのルートディレクトリに配置された`.editorconfig`ファイルにより、ファイルタイプごとにインデント、改行コード、文字エンコーディングなどの設定を統一できます。

## 対応エディタ

多くのエディタがEditorConfigをネイティブサポートしています：

- **Visual Studio Code**: ネイティブサポート
- **IntelliJ IDEA / WebStorm / PhpStorm**: ネイティブサポート
- **Vim / Neovim**: プラグインまたはネイティブサポート
- **Emacs**: プラグイン
- **Sublime Text**: プラグイン
- **Atom**: プラグイン

## 設定内容

このプロジェクトの`.editorconfig`では以下の設定を採用しています：

### 全ファイル共通
- 文字エンコーディング: UTF-8
- 改行コード: LF（Unix形式）
- ファイル末尾に改行を挿入
- 行末の空白文字を削除
- インデント: スペース使用

### ファイルタイプ別設定
- **一般ファイル**: 2スペースインデント
- **Python**: 4スペースインデント（PEP 8準拠）
- **Java/C/C++**: 4スペースインデント
- **Go**: タブインデント（Go慣例準拠）
- **Makefile**: タブインデント（必須）
- **Markdown**: 行末空白削除を無効化

## 使用方法

1. このリポジトリをクローンまたはダウンロード
2. EditorConfig対応エディタでファイルを開く
3. 設定が自動的に適用される

## エディタ別セットアップ

### Visual Studio Code
追加設定は不要です。VSCodeは`.editorconfig`ファイルを自動的に認識します。

### Vim/Neovim
EditorConfigプラグインをインストール：
```vim
" vim-plug使用の場合
Plug 'editorconfig/editorconfig-vim'
```

### Emacs
EditorConfigパッケージをインストール：
```elisp
(use-package editorconfig
  :ensure t
  :config
  (editorconfig-mode 1))
```

### Sublime Text
Package Controlから「EditorConfig」パッケージをインストール。

## 確認方法

エディタでファイルを編集する際に、以下の設定が適用されているかを確認してください：

1. インデントが設定通りのスペース/タブ数になっている
2. ファイル保存時に行末空白が削除される
3. ファイル末尾に改行が追加される

## 詳細情報

EditorConfigの詳細については公式サイトを参照してください：
https://editorconfig.org/