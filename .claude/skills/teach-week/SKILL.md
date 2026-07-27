---
name: teach-week
description: Generate one curriculum week's lessons (lessons/week-<n>/index.html + <k>-<title>.html) following STYLE.md and the full review gate. Use when the mentor asks to generate, regenerate, or revise a week's lessons. Takes the week number as argument.
argument-hint: <week-number>
---

# Generate a curriculum week

Argument: the week number N. Produces `lessons/week-N/index.html` plus `lessons/week-N/<k>-<title>.html`, and adds the week's row to the `lessons/index.html` hub. The content contract is `lessons/STYLE.md` — read it first, follow it exactly; this skill only encodes the process around it.

## Phase 1 — Absorb sources (never generate from memory of the topic)

1. Read `lessons/STYLE.md` in full.
2. Read ALL of `curriculum/coursebook/week-N/`: README schedule, learning-outcomes, every locally linked .md (workshops, exercises, project briefs). For externally linked GSG workshop repos, read enough (WebFetch the README) to represent them faithfully.
3. Skim week N-1 and N+1 README + learning-outcomes: week N must end ready for N+1's assumptions.
4. Read `MISSION.md`, `NOTES.md` (including its student-history section), `AGENTS.md` (workshop-fork and review-gate notes), and `feedback/week-<N-1>.md` if it exists — student-reported stuck-points from the previous week change how much scaffolding this week needs.

## Phase 2 — Map the week

Turn the README schedule into a lesson list, in schedule order:
- Drop cohort-only slots (welcome talks, ice-breakers, morning inspiration) — list them once in the index as "not applicable solo".
- Adapt pair/cohort workshops to solo + agent-as-pair; the adaptation lives in `<!-- agent-pair: ... -->` HTML comments, with only a subtle footer pointer.
- Content the track's prerequisites already cover gets compressed into one refresh lesson with a skip checkpoint (see 1-7 for the pattern), not dropped.
- Multi-session slots merge into one lesson only when the combined new-concept load stays structured (STYLE.md rule 2); otherwise split.
- Draft the index's Sequencing notes NOW: every deviation from the README order, with its reason. If the curriculum's own ordering is broken for a solo learner, deviate and log it — never silently.

## Phase 3 — Generate

- Write each lesson per the STYLE.md skeleton and hard rules. Reuse `assets/course.css`, `quiz.js`, `tooltip.js`, `flex-playground.js` patterns; add shared assets only if a new interaction type truly needs one.
- Create or update `reference/` cheat sheets for every topic the lessons link — never link a sheet that doesn't exist.
- Add the week's section skeleton to `feedback/week-N.md` (copy the week-1 header/protocol).
- Every lesson footer: the two feedback questions + prev/next/index nav.

## Phase 4 — Review gate (do not skip, do not self-certify)

1. Mechanical link check: every local `href`/`src` in the new files resolves (bash loop; see below).
2. Two parallel sol reviewers via `Agent(subagent_type: "codex:codex-rescue")`, prompts per the `gpt-5-4-prompting` contract (compact XML blocks, grounding rules, compact output contract), runtime `--effort medium`:
   - **Beginner simulation**: persona = this week's entry state (prerequisites from the index + everything weeks 1..N-1 taught, nothing else). Walks every numbered step literally, tracking working directory and tool context. Bar: zero blockers.
   - **STYLE compliance**: audits every STYLE.md hard rule + curriculum fidelity (schedule order vs index sequencing notes, outcomes coverage) with file:line evidence.
3. **Verify before fixing**: check each finding against the actual files. Fix confirmed ones; overrule false positives with stated evidence (placeholder-vs-hardcoded paths, prerequisite-vs-untaught knowledge are the common false-positive classes).
4. **Thread-trace pass**: one more medium-effort sol reviewer tracing every cross-tool thread end-to-end — terminal working directory through all commands, git repo/remote state through every push/PR instruction, editor↔browser↔console handoffs. Historically this catches what per-lesson review misses (a PR demanded against a repo that never got a remote).
5. Iterate 2–4 until a round produces no confirmed blockers. Expect 2–3 rounds with shrinking severity; if severity is not shrinking, stop and tell the mentor.

## Phase 5 — Record and hand off

- If diagnosis or design decisions changed anything reusable, fold it into the living docs: student state → `NOTES.md`, lesson-design rules → `lessons/STYLE.md`, process/infrastructure → `AGENTS.md`.
- Report to the mentor: lesson list with curriculum-slot mapping, sequencing notes, review rounds summary (found → fixed → overruled), open questions. Commit only when the mentor says so.

## Link check snippet

```bash
cd lessons/week-N && for f in *.html; do grep -oP '(?:href|src)="[^"#]+"' "$f" | sed 's/.*="//;s/"$//' | grep -v '^http' | while read -r p; do [ -e "$p" ] || echo "BROKEN: $f -> $p"; done; done
```
