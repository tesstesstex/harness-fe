---
name: delegate
description: 実装タスクを codex CLI に委任し、完了後に検証する。実装作業(コード新規作成・修正・リファクタリング)を行う際はこのスキルを使うこと。
---

「$ARGUMENTS」という実装タスクを codex CLI に委任してください。手順:

1. タスクを自己完結した指示文にまとめる。含めるもの:
   - 作業ディレクトリ(プロジェクトルート)と対象ファイル
   - 具体的な要件と完了条件
   - 検証方法(例: `npm run check` が通ること)
   - 「git commit はしないこと」という注意書き

2. 以下のコマンドで codex を実行する(数分かかる場合はバックグラウンド実行し、完了通知を待つ):

   ```bash
   codex exec --skip-git-repo-check --sandbox workspace-write \
     -c sandbox_workspace_write.network_access=true \
     -C "$(pwd)" \
     -o "$SCRATCHPAD/codex-last-message.txt" \
     "<指示文>"
   ```

3. codex 完了後、Claude 側で必ず検証する:
   - `-o` で書き出された最終メッセージを読む
   - `git diff --stat` で変更範囲を確認
   - `npm run check`(lint + typecheck + test + build)を実行
   - 失敗した場合は、失敗内容(エラー出力)を含めて `codex exec resume --last "<修正指示>"` で再委任する

4. 検証結果(変更ファイル一覧、チェック結果)をユーザーに報告する。コミットはユーザーの明示的な指示があるまで行わない。
