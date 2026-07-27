# 0005 — Week 2 generated against organisation-owned, modernized workshop forks

Date: 2026-07-27

## Context

Week 2 (testing week) leans on seven externally published GSG-CA workshop repos
(npm-introduction, testing-tdd-intro, fizzbuzz, Roman-Numerals, mc-es6-challenge,
pure-functions-easy-testing-ws, morning-challenge-traffic-lights). During the
review gate for the generated lessons, both the thread-trace and beginner-simulation
reviewers kept finding mismatches that were upstream-repo problems, not lesson
problems: fizzbuzz ships the finished solution (killing the TDD arc), Roman-Numerals
pins Jest 25 from 2020, traffic-lights' shipped `script.js` contradicted any honest
first visual checkpoint, and Jest 30 installs now emit "19 high severity
vulnerabilities" audit noise no lesson explained. Lessons written faithfully against
stale upstreams could not be both accurate and pedagogically sound.

## Decision

- Mirror-imported all seven repos (full history preserved, no force-pushes) into the
  `bootcamp-we-have-at-home` GitHub org as public repos.
- Modernized each fork to make the lesson narrative literally true: fizzbuzz `index.js`
  reset to an empty exported stub; Roman-Numerals moved to Jest ^30 with the
  `typeof module !== "undefined"` browser guard the lesson teaches; traffic-lights
  `script.js` reworked so the shipped example matches the lesson's step-2 checkpoint and
  the "already built for you" helpers exist; docs repos (npm-introduction,
  testing-tdd-intro) rewritten to mirror the lesson steps so README and lesson cannot
  contradict; mc-es6-challenge's ES5 source deliberately untouched (it is the exercise).
  Every repo smoke-tested from a fresh anonymous https clone on Node 22 / npm 10.
- All week-2 lessons and reference sheets link only the org forks (31 references
  swapped; zero GSG-CA strings remain outside read-only `curriculum/`).
- Jest/live-server audit noise is taught, not hidden: 2-3 carries the canonical
  explanation (expected counts, why, and never run `npm audit fix --force`); other
  Jest-installing lessons point at it with one-line in-block comments.

## Consequences

- Lessons can assert exact outputs (clone listings, first `npm test` states, package
  counts) because we control the repos; reviewers verify against the forks empirically.
- Upstream GSG-CA drift no longer breaks lessons, but the forks are now ours to
  maintain — future weeks reusing these repos must check the fork, not upstream.
- `curriculum/` still references GSG-CA; that is intentional (read-only source material).
- Review-gate note for future weeks: repo modernization and lesson review must converge
  before the final rounds — one round was spent re-reviewing lessons against repos that
  changed underneath it. This time: incorporate repo changes first, then run the final
  review rounds on the integrated state.
