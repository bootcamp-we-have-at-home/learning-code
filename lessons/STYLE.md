# Lesson Design Standard

Contract for every generated lesson. Written after the student reported the first three lessons "too hard to follow" — lessons 1–2 were attempted and failed in practice; a 4-reviewer audit found the root causes recorded in `learning-records/0003-lesson-redesign.md`. Every rule below traces to one of them. Rules 9–11 were added after the first cohort finished week 1 (`feedback/week-1.md`, week-overall; `learning-records/0004-week-1-feedback-revision.md`).

## File layout & naming

```
lessons/<week>-index.html            # week map: outcomes, prerequisites, lesson order, sequencing notes, project brief link
lessons/<week>-<lesson>-<title>.html # e.g. lessons/1-4-terminal.html
```

- Flat under `lessons/` — no per-week subdirectories. Assets are linked as `../assets/…`, references as `../reference/…`.
- Lesson order inside a week MUST follow `curriculum/coursebook/week-<n>/README.md` schedule order. Deviations are only allowed when the curriculum's own ordering is broken for a solo learner — and every deviation MUST be listed in the week index under a "Sequencing notes" section with the reason (the scream register).
- Cohort-only slots (ice-breakers, welcome talks, pastoral care) are dropped, listed once in the index as "not applicable solo".
- Pair/cohort workshops are adapted to solo + agent-as-pair. The agent-pair instructions live in HTML comments (`<!-- agent-pair: ... -->`) so they never distract a solo reader; the lesson shows only a subtle footer line pointing at them.

## Before generating a week

1. Read the FULL week's curriculum content (every linked local .md, workshop, exercise, project brief) — lessons must be faithful to it, not to memory of the topic.
2. Skim the previous and next week's README + learning-outcomes: the week must end ready for the next one (e.g. week-1 must leave git + npm-ready terminal skills because week-2 opens with npm/Jest).
3. Only then write lessons. Modernize code afterwards (see below), never invent new scope the curriculum doesn't cover.

## Hard rules (each traces to a diagnosed failure)

1. **Teach before require.** A lesson may only use skills taught earlier in the same week-ordering or listed in the index as prerequisites (e.g. no git before the git lesson).
2. **Density needs structure.** Dense lessons are allowed, unstructured density is not. A lesson introducing more than ~7 genuinely new items (commands, tags, properties, terms) must justify itself in self-review: chunked sections, each concept used immediately after it is introduced, prose that flows. If it can't, split the lesson or push overflow to the cheat sheet, explicitly framed as "look up, don't memorize". Jargon gets inline tooltips (see Tooltips) so explanations don't clog the flow.
3. **One outcome per numbered step** — a single command, or one tight command sequence explained as a unit — and every step ends with a visible success check: "you should now see …". A student working alone must be able to tell they succeeded without a mentor present.
4. **No untaught exercise or check requirements.** If the exercise needs it, the lesson body teaches it first or the index lists it as a prerequisite. Checks test only what the body taught — never introduce the explanation for the first time inside answer feedback. Exception: diagnostic skip-checkpoints may probe prerequisite knowledge, but every probed item's explanation must exist in the lesson body the student falls back to.
5. **No hardcoded environments.** No usernames, no `/home/<name>`, no assumed folder that a previous lesson didn't explicitly create. First use of a workspace folder is created inside the lesson itself ("create `~/code/week-1`; you'll reuse it all week").
6. **Interactive commands get their interaction described** (what the prompt looks like, what to type, how to exit) in the body before the student runs them: `git add -p`, `man`, `less`, REPLs. Tooltips cover terms; prompt transcripts stay in the body.
7. **Destructive commands** (`rm`, `>` redirect over existing files, force flags) are always preceded by a safety line and a verification step (`ls` / `cat` first), and the safer alternative is taught alongside (`gio trash`).
8. **Code lives in blocks, never woven into prose.** Anything the student must type gets its own `<pre><code>` block inside the step — one command per line, with an aligned `//` or `#` comment saying what it does or what it returns. Inline `<code>` is only for *referring* to names, files, and values. A step's prose is at most one framing sentence before the block and one success check after it. A step whose commands wrap across multiple prose lines is a defect.
9. **Extra worked examples, collapsed.** Each idea section carries at least one worked example beyond the minimum teaching path, inside `<details class="examples"><summary>More examples (optional)</summary>…</details>` so it is skippable and the required reading stays short. Nothing the steps or checks depend on may live inside a collapsed block (students reported wanting more examples without more required reading).
10. **Cite what you assume.** Strengthens rule 1: it is not enough that a skill was taught earlier — its first use in a lesson *names the source inline* ("the F12 console from lesson 1-1"). Knowledge from outside the track (prerequisites included) gets a link to where it is explained (freeCodeCamp section, MDN page), or a one-line explanation in place. A bare "as you know" is a defect (students reported unexplained assumed knowledge).
11. **Every idea section ends with a "Read more" line** — `<p class="read-more">` with 1–3 optional links to adjacent topics the section opens a door to but doesn't cover (e.g. media queries → mobile-first design). Chosen per section, clearly optional, never required by any step or check, and never a substitute for teaching in the body.

## Check yourself: active over passive

Prefer the most active check format the topic allows: predict-the-output, fix-the-broken-snippet, interactive playgrounds (like the flex playground), "type this, then explain what happened". Multiple-choice quizzes (`quiz.js`) are the fallback when nothing more active fits, not the default.

## Tooltips

Jargon terms ("hunk", "staging area", "viewport") are marked with a shared `.term` pattern (dotted underline; explanation on hover/focus, tap-toggle on touch) defined in `assets/course.css` + shared JS. Tooltips explain terms; they never carry required instructions.

## Modernizing curriculum code

The curriculum is a fixed sequence but its snippets may be dated. Update code, keep scope: `git switch -c` (mention `git checkout -b` as the legacy form students will see in the coursebook), `main` not `master`, `const`/`let` and arrow functions in JS examples, semantic HTML in every markup example. When modernized, add one aside: "the coursebook writes X; today we write Y". Never modernize into content the curriculum doesn't teach (no Grid in the Flexbox lesson).

## Lesson skeleton

Every lesson file: shared `../assets/course.css`, then in order — title, subtitle (time estimate + curriculum slot), "why this matters" (≤ 2 sentences, tied to the mission/week project), 1–2 idea sections (each with a collapsed extra-examples block, rule 9, and closing with a read-more line, rule 11), "do it for real" steps (rules 3–7), a Check Yourself section (active format preferred), "go deeper" primary source, footer nav (cheat sheet, previous/next lesson, "ask your teacher" prompt, subtle agent-pair pointer where relevant).

## Student feedback protocol

Every lesson ends with a feedback capture so future students improve the material.

Mechanism (mentor-decided): the lesson footer asks the student to tell the teaching agent two things — ① "Could you follow this lesson alone? 1–5" and ② "Where did you get stuck, if anywhere?" The agent appends the answers verbatim to `feedback/week-<n>.md` under the lesson's heading, dated. A score ≤3 or any stuck-point triggers a lesson revision before the next student uses it.

## Definition of done for a generated week

- Every lesson passes rules 1–7 by self-review.
- Every link resolves: cheat sheets, assets, prev/next lessons, curriculum paths. New topics get their `reference/` cheat sheet created or updated in the same pass — never link a sheet that doesn't exist.
- A beginner-simulation review (fresh agent, persona: this week's entry-level student) walks every step and reports zero blockers.
- The week index links every lesson, states outcomes from the curriculum's learning-outcomes.md, lists prerequisites, and contains the sequencing-notes register (even if empty).
