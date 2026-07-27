# Learning workspace — teaching agent instructions

This repo is a modernized, self-serve delivery of the GSG Code Academy curriculum (`curriculum/coursebook/` is the read-only source; `lessons/` is the product) — built for solo students working without a cohort, with an agent as teacher/pair. `MISSION.md` and `NOTES.md` hold the current student's goals, state, and history; the lesson material itself stays student-agnostic and reusable.

## Standing rules

- **Lessons**: live in `lessons/week-<n>/` as `<k>-<title>.html` + `index.html`, with `lessons/index.html` as the track hub. Any lesson edit or creation follows `lessons/STYLE.md` — it is the contract; its preamble records the diagnosed failures each rule traces to. To generate or regenerate a whole week, use the `teach-week` skill, not ad-hoc generation.
- **Lesson ordering** strictly follows `curriculum/coursebook/week-<n>/README.md`; deviations only where the curriculum's ordering is broken for a solo learner, each logged in the week index's sequencing notes.
- **Feedback protocol**: when the student reports lesson feedback (followability 1–5 + stuck-points), append it verbatim, dated, under the lesson's heading in `feedback/week-<n>.md`. Score ≤3 or any stuck-point ⇒ revise that lesson before the next student uses it. Feedback is append-and-keep: mark entries "addressed" with what changed, never delete them.
- **Record keeping**: there is no separate decision-record directory — durable changes land directly in the living docs (student state/progress → `NOTES.md`, lesson-design rules → `lessons/STYLE.md`, process/infrastructure → this file). When recording student progress, always distinguish solo completion from mentor-assisted completion — completion ≠ followability.
- **Agent-as-pair**: pair-workshop adaptations live in `<!-- agent-pair: ... -->` comments inside lesson HTML. When the student asks to pair or requests review, follow those instructions and the etiquette in `curriculum/coursebook/week-1/codereviewintro.md`.
- Curriculum content is read-only source material — never edit `curriculum/`. Its references to upstream GSG-CA repos are intentional and stay.
- **GitHub Pages**: the site is served from `main` at the repo root (`https://bootcamp-we-have-at-home.github.io/learning-code/`); the root `index.html` redirects to `lessons/index.html`, and `.nojekyll` keeps the deploy raw. All internal links must stay relative so pages work both over `file://` and on Pages.

## Workshop repo forks (week 2+)

Week 2's seven GSG-CA workshop repos (npm-introduction, testing-tdd-intro, fizzbuzz, Roman-Numerals, mc-es6-challenge, pure-functions-easy-testing-ws, morning-challenge-traffic-lights) are mirror-imported (full history, no force-pushes) into the public GitHub org **`bootcamp-we-have-at-home`**, because stale upstreams broke the lesson narratives (2026-07-27).

- Lessons and reference sheets link **only the org forks**; zero GSG-CA links outside `curriculum/`. Future weeks reusing these repos must check the fork, not upstream — the forks are ours to maintain.
- Modernizations already in place: fizzbuzz `index.js` is an empty exported stub (preserves the TDD arc); Roman-Numerals runs Jest ^30 with the `typeof module !== "undefined"` browser guard the lesson teaches; traffic-lights' `script.js` matches the lesson's step-2 checkpoint and ships the promised helpers; npm-introduction and testing-tdd-intro READMEs mirror the lesson steps; mc-es6-challenge's ES5 source is **deliberately untouched** (it is the exercise).
- Repos are smoke-tested from a fresh anonymous https clone on Node 22 / npm 10 — lessons may assert exact outputs (clone listings, first `npm test` state, package counts) because we control the repos.
- Jest/live-server `npm audit` noise is taught, not hidden: lesson 2-3 carries the canonical explanation (expected counts, why, never `npm audit fix --force`); other Jest-installing lessons point at it with one-line comments.
- Review-gate ordering: repo modernization must land **before** the final lesson-review rounds — reviewing against repos that then change wastes a round.

## Shared front-end contracts

All lesson/index/reference/settings pages share `assets/course.css` — a "warm editorial textbook" design system, light and dark. When touching it, preserve:

- The default body font is the MDN-style sans stack (Inter → system UI, 17px/1.7); serif (Palatino/Georgia) is the **opt-in** via `html.font-serif` (the `lesson-font` toggle inverted 2026-07-28 — mentor found serif hard to read).
- `lessons/config.html` display settings (page width incl. ultrawide, theme, text size, font) persist via localStorage overrides; its radio groups are `.choices` option cards.
- CSS variables `--accent`, `--code-bg`, `--rule` are consumed by `flex-playground.js`; `assets/layout.js` injects the 3px reading-progress bar.
- `quiz.js` logs-and-skips malformed `data-opts` JSON instead of dying silently; quotes inside `data-opts` must be escaped (`\&quot;`).
