// Reusable quiz widget.
// Usage: <div class="quiz" data-q="Question?" data-opts='["A","B","C"]'
//             data-answer="1" data-why="Explanation shown after answering"></div>
// Then: <script src="../assets/quiz.js"></script> at end of body.
document.querySelectorAll(".quiz[data-q]").forEach((el) => {
  let opts;
  try {
    opts = JSON.parse(el.dataset.opts);
  } catch (e) {
    console.error("quiz.js: bad data-opts JSON", el, e);
    return;
  }
  const answer = Number(el.dataset.answer);
  const q = document.createElement("p");
  q.className = "q";
  q.textContent = el.dataset.q;
  el.appendChild(q);
  const feedback = document.createElement("p");
  feedback.className = "feedback";
  opts.forEach((text, i) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = text;
    b.addEventListener("click", () => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      b.classList.add(i === answer ? "right" : "wrong");
      el.querySelectorAll(".opt")[answer].classList.add("right");
      feedback.textContent =
        (i === answer ? "Correct. " : "Not quite. ") + (el.dataset.why || "");
    });
    el.appendChild(b);
  });
  el.appendChild(feedback);
});
