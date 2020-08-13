//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var tanjiroScore = 0;
var sabitoScore = 0;
var zenitsuScore = 0;
var nezukoScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", tanjiro);
q1a2.addEventListener("click", nezuko);
q1a3.addEventListener("click", sabito);
q1a4.addEventListener("click", zenitsu);

q2a1.addEventListener("click", nezuko);
q2a2.addEventListener("click", sabito);
q2a3.addEventListener("click", tanjiro);
q2a4.addEventListener("click", zenitsu);

q3a1.addEventListener("click", zenitsu);
q3a2.addEventListener("click", nezuko);
q3a3.addEventListener("click", tanjiro);
q3a4.addEventListener("click", sabito);

q4a1.addEventListener("click", tanjiro);
q4a2.addEventListener("click", nezuko);
q4a3.addEventListener("click", zenitsu);
q4a4.addEventListener("click", sabito);

q5a1.addEventListener("click", nezuko);
q5a2.addEventListener("click", zenitsu);
q5a3.addEventListener("click", sabito);
q5a4.addEventListener("click", tanjiro);

q6a1.addEventListener("click", nezuko);
q6a2.addEventListener("click", zenitsu);
q6a3.addEventListener("click", tanjiro);
q6a4.addEventListener("click", sabito);

q7a1.addEventListener("click", tanjiro);
q7a2.addEventListener("click", sabito);
q7a3.addEventListener("click", nezuko);
q7a4.addEventListener("click", zenitsu);

//#Define quiz functions here
function tanjiro() {
  tanjiroScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResult();
  }
}

function sabito() {
  sabitoScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResult();
  }
}

function zenitsu() {
  zenitsuScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResult();
  }
}

function nezuko() {
  nezukoScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResult();
  }
}

//# Update Code once you add more questions

function updateResult() {
  if (tanjiroScore >= 5) {
    result.innerHTML = "✨ Tanjiro Kamado!(・∀・) ✨";
  } else if (sabitoScore >= 5) {
    result.innerHTML = "✨ Sabito!♡＾▽＾♡✨";
  } else if (nezukoScore >= 5) {
    result.innerHTML = "✨ Nezuko Kamado!ヽ(^o^)丿 ✨";
  } else if (zenitsuScore >= 5) {
    result.innerHTML = "✨ Zenitsu!(≧∇≦)/ ✨";
  } else {
    result.innerHTML =
      "Final Selection seems to be delayed... Try again later! ᕕ( ᐛ )ᕗ";
  }
}
