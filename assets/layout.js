// Applies the display preferences saved by lessons/config.html.
// Loaded right after course.css so choices apply before the body renders.
// Keys and the classes they map to (anything unset or unknown = default):
//   lesson-page-width: "narrow"/"wide" -> html.narrow / html.wide (default: medium column)
//   lesson-theme:      "light"/"dark" -> html.theme-light / html.theme-dark (else follow system)
//   lesson-text-size:  "large"       -> html.text-large
//   lesson-font:       "sans"        -> html.font-sans
try {
  var cls = document.documentElement.classList;
  var width = localStorage.getItem("lesson-page-width");
  if (width === "narrow") cls.add("narrow");
  if (width === "wide") cls.add("wide");
  var theme = localStorage.getItem("lesson-theme");
  if (theme === "light") cls.add("theme-light");
  if (theme === "dark") cls.add("theme-dark");
  if (localStorage.getItem("lesson-text-size") === "large") cls.add("text-large");
  if (localStorage.getItem("lesson-font") === "sans") cls.add("font-sans");
} catch (e) {}
