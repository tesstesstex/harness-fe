---
name: fix-ci
description: GitHub Actions の失敗を調査し、修正を codex に委任して CI をグリーンにする。引数で対象の run ID やブランチを指定できる。
---

GitHub Actions の失敗を調査し、修正してください。引数: 「$ARGUMENTS」

手順:

1. 失敗した run を特定する:
   - 引数で run ID の指定があればそれを使う
   - なければ `gh run list --limit 10` から現在のブランチの直近の失敗 run を選ぶ

2. `gh run view <run-id> --log-failed` で失敗ログを取得し、原因を分析する。
   ローカルで再現できるか `npm run check`(E2E 起因なら `npm run test:e2e`)で確認する。

3. 原因と修正方針をユーザーに簡潔に報告したうえで、修正の実装は `/delegate` スキルの手順に従って codex に委任する。
   指示文には失敗ログの該当箇所と再現手順を含める。

4. codex 完了後、失敗していたコマンドをローカルで再実行して修正を検証する。

5. 検証結果を報告する。コミット・プッシュはユーザーの指示があるまで行わない。
