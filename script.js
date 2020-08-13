//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var tanjiroScore = 0;
var sabitoScore = 0;
var zenitsuScore = 0;
var nezukoScore = 0;

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

//#Define quiz functions here
function tanjiro() {
  tanjiroScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function sabito() {
  sabitoScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function zenitsu() {
  zenitsuScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function nezuko() {
  nezukoScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

//# Update Code once you add more questions

//define result = document.getElementById("result"); 
//Where do I put it?  right here is fine on line 92
 
function updateResult() {
  if (tanjiroScore >= 3) {
    result.innerHTML = "✨ Tanjiro Kamado!(・∀・) ✨";
  } else if (sabitoScore >= 3) {
    result.innerHTML = "✨Nezuko Kamado!(＾▽＾) ✨";
  } else if (nezukoScore >= 3) {
    result.innerHTML = "✨ Sabito!ヽ(^o^)丿 ✨";
  } else if (zenitsuScore >= 3) {
    result.innerHTML = "✨ Zenitsu!(≧∇≦)/ ✨";
  } else {
    result.innerHTML =
      "Final Selection seems to be delayed... Try again later! ⌒°(❛ᴗ❛)°⌒";
  }
}
