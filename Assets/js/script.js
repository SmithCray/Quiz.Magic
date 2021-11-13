var currentQuestion = document.querySelector("#currentQuestion");
var quizTimer = document.querySelector("#timerDisplay");
var startBtn = document.querySelector("#startBtn");
var nextBtn = document.querySelector("#nextBtn");
var questionIndex = 0;
var timer = 30;

var myQuestions = [
  {
    questions: "How many different colors of mana are in Magic?",
    choices: ["4", "6", "9", "10"],
    correstAnswer: 1,
  },
  {
    questions: "How many cards are in a startdard deck?",
    choices: ["40", "45", "55", "60"],
    correctAnswer: 3,
  },
  {
    questions: "How many cards can you have in your sideboard?",
    choices: ["12", "15", "17", "20"],
    correctAnswer: 1,
  },
];
console.log(myQuestions);

function setTimer() {
  var substractTime = setInterval(function () {
    //console.log("Hey");
    quizTimer.innerHTML = timer;
    timer--;
  }, 1000);
}

function hideStart() {
  document.getElementById("startBtn").style.display = "none";
}

function showQuestion() {
  currentQuestion.innerHTML = myQuestions[questionIndex].questions;
  for (var i = 0; i < myQuestions[questionIndex].choices.length; i++) {
    //create a button for each choice
    //display the value of the choice onto the button you just created
    //add/append the button to the choices div
  }
  //for(where you want the loop to start, where you want the loop to end; what's the next index that you want to loop through)
}

//Later on, when user select a choice, need to increase questionIndex by 1 questionIndex++
//call showQuestion again, to display the next question
//because now the questionIndex = 1;

document.getElementById("startBtn").onclick = function quizStart() {
  // alert("You have started the quiz!");
  setTimer();
  showQuestion();
  hideStart();
};
