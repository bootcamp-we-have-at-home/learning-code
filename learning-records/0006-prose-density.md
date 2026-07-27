# 0006 — Prose density: pace for a first-time programmer

Date: 2026-07-27

## Context

First week-2 feedback (feedback/week-2.md, lesson 2-2, verbatim): the npm lesson's
opening is "pretty dense — it jumps straight to comparing Node and browser JS and
then straight ahead to npm … ease in and change the pace … we are forgetting these
are new/fresh programmers … 'node is the same' feels like it should be a separate
line … the 5–6 paragraph lines are too dense for a new topic."

The mentor confirmed the failure applies across the week-2 pages, not just 2-2.
Root cause: STYLE.md rule 2 ("density needs structure") bounds the *count* of new
items per lesson but says nothing about prose pacing — paragraph length, concepts
per paragraph, or how a section opens. Writers packed multiple new concepts into
single long paragraphs and opened sections with comparisons before grounding the
reader in anything familiar.

## Decision

- Added STYLE.md hard rule 12: required-reading paragraphs are ≤2–3 sentences and
  carry at most one new concept; load-bearing claims stand alone; every idea section
  eases in from something the student already did before the first new term; extra
  detail moves to collapsed examples (rule 9) or tooltips, never into longer prose.
- Revised all ten week-2 lessons against rule 12 in one pass — prose restructuring
  only; steps, commands, success checks, links, and agent-pair comments stay as the
  review gate verified them.

## Consequences

- Future weeks are generated under rule 12 from the start; the teach-week review
  gate's STYLE audit now covers pacing.
- Rule 2 (structural density) and rule 12 (prose pacing) are distinct checks: a
  lesson can pass one and fail the other.
- Week-1 lessons were not revised — no student feedback flagged them; revisit only
  if feedback arrives.
