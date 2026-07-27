# 0007 — Visual redesign of the shared course stylesheet

Date: 2026-07-28

## Context

The mentor asked for a better-designed lesson experience. All lesson, index,
reference, and settings pages share `assets/course.css`, so the redesign happened
entirely in the shared design system — no lesson HTML content changed, and every
STYLE.md structural rule (tooltips, collapsed examples, steps, checks) is untouched.

## Decision

Adopt a "warm editorial textbook" design language, light and dark:

- **Typography.** Serif body kept (Iowan Old Style/Palatino/Georgia stack);
  sans-serif for meta text (subtitles, table headers, nav, labels, tooltips) to
  create hierarchy. Refined type scale and an accent bar above every `h1`;
  `h2` uses a top hairline instead of a bottom border.
- **Components.** Numbered steps render as accent badge counters; asides are
  tinted "note" callout cards; code blocks, quizzes, and collapsed
  examples/reveal blocks are bordered cards with soft shadows; quiz answers use
  tinted right/wrong fills instead of hard outlines; tooltips get shadow +
  slide-in; tables get sans uppercase headers.
- **Reading progress bar** injected by `assets/layout.js` (3px accent line at
  the viewport top).
- **Settings page** (`lessons/config.html`) radio groups became selectable
  option cards (`.choices` in course.css).

All existing class contracts, the config.html localStorage override mechanism
(width/theme/text/font), and the CSS variables used by `flex-playground.js`
(`--accent`, `--code-bg`, `--rule`) are preserved.

## Addendum (same day): sans-serif is the default typeface

The mentor found the serif body hard to read and asked for something closer to
MDN. The default body font is now the MDN-style sans stack (Inter when
installed, otherwise the system UI font) at 17px with 1.7 line-height, and
headings are weight 600. Serif (Palatino/Georgia) remains available as the
opt-in choice in display settings — the `lesson-font` toggle inverted from
"serif default, sans opt-in" to "sans default, serif opt-in" (`html.font-serif`).
A previously saved `lesson-font: sans` now simply matches the default.

## Incidental fix

Lesson 2-3's second quiz never rendered: its `data-opts` JSON contained
unescaped `&quot;` quotes, so `JSON.parse` threw. Escaped them (`\&quot;`) and
made `quiz.js` log-and-skip malformed quizzes instead of dying silently.
