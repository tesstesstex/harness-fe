<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: harness

Next.js + TypeScript の Web アプリケーション。App Router / `src/` ディレクトリ構成 / Tailwind CSS v4。

## コマンド

| コマンド                          | 内容                                       |
| --------------------------------- | ------------------------------------------ |
| `npm run dev`                     | 開発サーバー起動                           |
| `npm run build`                   | プロダクションビルド                       |
| `npm run lint`                    | ESLint                                     |
| `npm run format` / `format:check` | Prettier                                   |
| `npm run typecheck`               | tsc --noEmit                               |
| `npm run test` / `test:watch`     | Vitest 単体テスト                          |
| `npm run test:e2e`                | Playwright E2E                             |
| `npm run check`                   | lint + typecheck + test + build を一括実行 |

## 構成

- `src/app/` — App Router のページ・レイアウト
- `src/**/*.test.ts(x)` — 単体テスト(Vitest + Testing Library)
- `e2e/` — E2E テスト(Playwright)
- `.github/workflows/ci.yml` — CI(lint / typecheck / test / build / E2E)
- git hooks: husky + lint-staged(pre-commit)

## 規約

- コミット前に `npm run check` が通ること
- コミットメッセージは Conventional Commits 形式

## Claude Code 向け: 実装作業の委任ポリシー

**各種実装作業(コードの新規作成・修正・リファクタリング)は codex CLI に委任すること。**
Claude Code の役割はオーケストレーション(タスク分解・委任・結果の検証・レビュー)である。
委任には `/delegate` スキルを使う。軽微な修正(typo、1行変更、設定の微調整)は Claude が直接行ってよい。
codex 完了後は必ず `git diff --stat` と `npm run check` で検証する。
