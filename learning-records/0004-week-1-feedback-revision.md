# 0004 — Week-1 revised on first-cohort feedback; STYLE.md gains rules 9–11

Date: 2026-07-27
Status: active

## Context

The first cohort finished week 1 and left week-overall feedback (`feedback/week-1.md`, recorded 2026-07-27). No per-lesson scores ≤3 were reported; all four points were format-level requests:

1. More examples in the reading sections, collapsed/skippable.
2. No unexplained assumed knowledge — cite past lessons or explain new things with sources.
3. A dedicated git-conflict workshop.
4. A "Read more" adjacent-topics line at the end of each section.

Points 1, 2 and 4 are design-standard gaps, not single-lesson defects: the STYLE.md skeleton had exactly one required teaching path per idea section, allowed uncited (if correctly ordered) prerequisite use, and put optional links only in a lesson-level "Go deeper". Point 3 exposed an adaptation decision from the redesign (record 0003) that didn't survive contact with students: the Day 3 `git-workflow-workshop-for-two` had been folded into 1-5's agent-pair comments, so merge conflicts were never on the required path.

## Decision

- **STYLE.md rules 9–11 added** (extra worked examples collapsed in `<details class="examples">`; cite-what-you-assume strengthening rule 1; per-section `read-more` line), plus skeleton update and two small shared CSS additions (`details.examples`, `.read-more`) in `assets/course.css`. All week-1 lessons revised to comply.
- **New lesson `1-9-git-conflicts.html`**: solo adaptation of `git-workflow-workshop-for-two`, placed in its curriculum slot (Day 3, after array methods). The student causes a real conflict deliberately (two branches from one commit, same line, PR-merge one, `git merge main` on the other), reads the markers, resolves, ships. Agent-as-Programmer-2 pair mode in HTML comments. Former 1-9/1-10 renumbered to 1-10/1-11; index, nav links, cheat sheets and feedback headings updated. Git cheat sheet gained a merge-conflict section (and its footer link to the retired `0001-*` lesson was fixed).
- **Review-gate side catches, fixed in the same pass:** the 1-11 project brief had drifted from the curriculum's actual team-portfolio brief (user stories, contact, README WHY/WHAT/HOW, GitHub Pages) — it now states the solo adaptation honestly and restores the missing requirements; a thread-trace review found systematic missing "save before refresh/stage" instructions and editor-folder targeting across 1-2/1-3/1-5/1-6/1-9/1-10 (real blockers with autosave off), now explicit; stale cheat-sheet footer links to retired `000x` lessons fixed.
- Read-more links are optional adjacent topics by contract (rule 11) — they may exceed curriculum scope (e.g. mobile-first essay, explainshell) because nothing required depends on them; the no-new-scope rule continues to bind the teaching body.

## Consequences

- Week-2+ generation must satisfy rules 9–11 from the start; the `teach-week` review gate audits them like any hard rule.
- The current student finished week 1 before 1-9 existed: schedule the conflict workshop as a stand-alone catch-up session before week 2's collaborative work, and record solo vs assisted completion when he does it.
- Renumbering changed lesson filenames (`1-10-objects-operators-dom.html`, `1-11-project.html`); any external bookmarks to the old names are stale.
- Feedback protocol note: the week-overall entry stays in `feedback/week-1.md` marked "addressed" — feedback is append-and-keep, not consume-and-delete.
