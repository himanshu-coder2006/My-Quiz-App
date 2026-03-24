const questions = [
  {
    question: "1:- What is a correct syntax for an HTML hyperlink?",
    options: ["<a href='/home.htm'>Visit W3Schools.com!</a>", "<link href='/home.htm'>Visit W3Schools.com!</link>", "<alink href='/home.htm'>Visit W3Schools.com!</alink>", ],
    correct: "B"
  },
 {
  question: "2:- HTML ka full form kya hai?",
  options: [
    "Hyper Text Markup Language",
    "High Text Machine Language",
    "Hyper Tool Multi Language",
    "None"
  ],
  correct: "A"
},
{
  question: "3:- HTML me heading ke liye kaunsa tag use hota hai?",
  options: [
    "<h1>",
    "<p>",
    "<div>",
    "<span>"
  ],
  correct: "A"
},
{
  question: "4:- HTML me paragraph ke liye kaunsa tag use hota hai?",
  options: [
    "<p>",
    "<h1>",
    "<br>",
    "<hr>"
  ],
  correct: "A"
},
{
  question: "5:- HTML me line break ke liye kaunsa tag use hota hai?",
  options: [
    "<br>",
    "<hr>",
    "<p>",
    "<div>"
  ],
  correct: "A"
},
{
  question: "6:- HTML file ka extension kya hota hai?",
  options: [
    ".html",
    ".js",
    ".css",
    ".java"
  ],
  correct: "A"
},
{
  question: "7:- HTML me image insert karne ke liye kaunsa tag use hota hai?",
  options: [
    "<img>",
    "<image>",
    "<pic>",
    "<src>"
  ],
  correct: "A"
},
{
  question: "8:- HTML me link banane ke liye kaunsa tag use hota hai?",
  options: [
    "<a>",
    "<link>",
    "<href>",
    "<url>"
  ],
  correct: "A"
},
{
  question: "9:- HTML me list banane ke liye kaunsa tag use hota hai?",
  options: [
    "<ul>",
    "<li>",
    "<ol>",
    "All of the above"
  ],
  correct: "D"
}
];

let currentIndex = 0;

function loadQuestion() {
  const q = questions[currentIndex];

  document.getElementById("question").innerText = q.question;
  document.getElementById("opt1").innerText = q.options[0];
  document.getElementById("opt2").innerText = q.options[1];
  document.getElementById("opt3").innerText = q.options[2];
  document.getElementById("opt4").innerText = q.options[3];

  document.querySelectorAll('input[name="option"]').forEach(el => el.checked = false);
}

loadQuestion();

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected) return;

  const resultScreen = document.getElementById("resultScreen");
  const resultText = document.getElementById("resultText");
  const actionBtn = document.getElementById("actionBtn");

  resultScreen.style.display = "flex";

  if (selected.value === questions[currentIndex].correct) {
    // ✅ CORRECT
    resultScreen.className = "result-screen correct";
    resultText.innerText = "Correct Answer!";
    actionBtn.innerText = "Next Question »";

    actionBtn.onclick = () => {
      resultScreen.style.display = "none";
      currentIndex++;

      if (currentIndex < questions.length) {
        loadQuestion();
      } else {
        document.body.innerHTML =
          "<h1 style='color:white;text-align:center;margin-top:50px;'>Quiz Completed 🎉</h1>";
      }
    };

  } else {
    // ❌ WRONG
    resultScreen.className = "result-screen wrong";
    resultText.innerText = "Wrong Answer!";
    actionBtn.innerText = "Try Again";

    actionBtn.onclick = () => {
      resultScreen.style.display = "none";
      loadQuestion(); // same question
    };
  }
}
// SPLASH CONTROL
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("splash").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("splash").style.display = "none";
      document.getElementById("app").style.display = "block";
    }, 500);

  }, 500); // 2.5 sec
});