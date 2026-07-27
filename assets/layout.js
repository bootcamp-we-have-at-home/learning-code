// Applies the display preferences saved by lessons/config.html.
// Loaded right after course.css so choices apply before the body renders.
// Keys and the classes they map to (anything unset or unknown = default):
//   lesson-page-width: "narrow"/"wide"/"ultrawide" -> html.narrow / html.wide / html.ultrawide (default: medium column)
//   lesson-theme:      "light"/"dark" -> html.theme-light / html.theme-dark (else follow system)
//   lesson-text-size:  "large"       -> html.text-large
//   lesson-font:       "sans"        -> html.font-sans
try {
  var cls = document.documentElement.classList;
  var width = localStorage.getItem("lesson-page-width");
  if (width === "narrow") cls.add("narrow");
  if (width === "wide") cls.add("wide");
  if (width === "ultrawide") cls.add("ultrawide");
  var theme = localStorage.getItem("lesson-theme");
  if (theme === "light") cls.add("theme-light");
  if (theme === "dark") cls.add("theme-dark");
  if (localStorage.getItem("lesson-text-size") === "large") cls.add("text-large");
  if (localStorage.getItem("lesson-font") === "sans") cls.add("font-sans");
} catch (e) {}

// Reading progress bar: a thin accent line along the top of the viewport
// showing how far through the page you've scrolled (styled in course.css).
document.addEventListener("DOMContentLoaded", function () {
  var bar = document.createElement("div");
  bar.className = "progress-bar";
  document.body.appendChild(bar);
  var update = function () {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? (100 * window.scrollY) / max + "%" : "0";
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
});
