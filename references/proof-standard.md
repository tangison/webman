# Proof Standard

A completion claim without evidence is invalid.

For material work, maintain PROOF.md with these columns:

Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status

Use planned, running, passed, failed, blocked, paused, or superseded while work is open. Use complete only after every applicable release gate passes.

Proof must identify the exact state tested. A file existing, a check run before the latest edit, a local commit without remote verification, or a different test replacing the failed test is not proof.

After failure, preserve the output, identify root cause, apply the smallest complete fix, rerun the exact failed check, run broader regression checks, and record both results.
