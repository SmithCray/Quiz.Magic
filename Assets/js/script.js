var currentQuestion = "#currentQuestion";
var quizTimer = "#quizTimer";
var startBtn = "#startBtn";
var nextBtn = "#nextBtn";
var questionIndex = 0;

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

document.getElementById("startBtn").onclick = function quizStart() {
  alert("You have started the quiz!");
};

// startQuiz = () => {
// questionCounter = 0
// sore =0
// availableQuestions = [...questions]
// nextQuestion()
// }

// getNewQuestion =() => {
// if(availableQuestions.length === 0 || questionCounter > MAX_QUESTION)

// class Quiz {
//   constructor(questions) {
//     this.score = 0;
//     this.questions = 0;
//     this.questionIndex = 0;
//   }
//   getQuestionIndex() {
//     return this.questions[this.questionIndex];
//   }
//   guess(answer) {
//     if (this.getQuestionIndex().isCorrectAnswer(answer)) {
//       this.score++;
//     }
//     this.questionIndex++;
//   }
//   isEnded() {
//     return this.questionIndex === this.questions.length;
//   }
// }
// class Question {
//   constructor(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
//   }
//   isCorrectAnswer(choice) {
//     return this.answer === choice;
//   }
// }

// function displayQuestion() {
//   if (quiz.isEnded()) {
//     showScores();
//   } else {
//     let questionElement = document.getElementById("question");
//     questionElement.innerHTML = quiz.getQuestionIndex().text;

//     let choices = quiz.getQuestionIndex().choices;
//     for (let i = 0; i < choices.length; i++) {
//       let choiceElement = document.getElementById("choice" + i);
//       choiceElement.innerHtml = choices[i];
//       guess("btn" + i, choices[i]);
//     }

//     showProgress();
//   }
// }

// function guess(id, guess) {
//   let button = document.getElementById(id);
//   button.onclick = function () {
//     Quiz.guess(guess);
//     displayQuestion();
//   };
// }

// function showProgress() {
//   let currentQuestionNumber = Quiz.questionIndex + 1;
//   let progressElement = document.getElementById("progress");
//   progressElement.innerHTML =
//     "Question ${currentQuestionNumber} of ${quiz.questions.length}";
// }
// ****
// function showScores() {
//     let quizEndHTML =
//         '
//             <h1>Quiz Completed</h1>
//             <h2 id="score">You Scored: ${Quiz.score} of ${Quiz.questions.length}</h2><div class="quiz-repeat">
//                     <a href="index.html">Take Quiz Again</a>
//                 </div></>
//         ';
//         let quizElement = document.getElementById("quiz");
//         quizElement.innerHTML = quizEndHTML;
// }
// ******
// let questions = [
//   new Question(
//     "How mana types of mana are there in Magic?",
//     ["4", "8", "9", "11"],
//     "9"
//   ),
//   new Question(
//     "How mana types of mana are there in Magic?",
//     ["4", "8", "9", "11"],
//     "9"
//   ),
//   new Question(
//     "How mana types of mana are there in Magic?",
//     ["4", "8", "9", "11"],
//     "9"
//   ),
//   new Question(
//     "How mana types of mana are there in Magic?",
//     ["4", "8", "9", "11"],
//     "9"
//   ),
//   new Question(
//     "How mana types of mana are there in Magic?",
//     ["4", "8", "9", "11"],
//     "9"
//   ),
// ];

// let quiz = new Quiz(questions);

// function displayQuestion();

// var timer = 60;
// var displayTimer = document.querySelector("displayTimer");
// function startQuiz(question, quizQuestions, correctAnswer, startBtn) {
//   function showQuestion(question, quizQuestions) {
//     var output = [];
//     var answers;

//     for(var i=0; i<questions.length; i++){
//         answers= [];

//         for(letter in question[i].answers){
//             answers.push(
//                 '<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
//             )
//         }
//   }
//   function correctAnswer(question, quizQuestions, correctAnswer) {

//   }
//   showQuestion(question, quizQuestions);

//   startBtn.onclick = function () {
//     correctAnswer(question, quizQuestions, correctAnswer);
//   };
// }

// var questionList = [
//   {
//     question: "How many mana types are ther in Magic?",
//     answers: {
//       1: "3",
//       2: "5",
//       3: "7",
//     },
//     correctAnswer: "1",
//   },
//   {
//     question: "How many cards can 1 player have in a standard deck?",
//     answers: {
//       1: "1",
//       2: "2",
//       3: "3",
//     },
//     correctAnswer: "1",
//   },
// ];

// document.getElementById("startBtn").addEventListener("click", function () {
//   var timeleft = 15;

//   var downloadTimer = setInterval(function function1() {
//     document.getElementById("countdown").innerHTML =
//       timeleft + " " + "seconds remaining";

//     timeleft -= 1;
//     if (timeleft <= 0) {
//       clearInterval(downloadTimer);
//       document.getElementById("countdown").innerHTML = "Time is up!";
//     }
//   }, 1000);

//   console.log(countdown);
// });

// function startTimer() {
//   timer = timer - 1;
//   setTimeout(startTimer, 1000);
// }
// console.log(startTimer);

// function startTimer() {
//   timer = timer - 1;
//   elem1.innerHTML = "startBtn" + timer + " seconds";
//   setTimeout(startTimer, 1000);
//   console.log(time);
// }
// document.getElementById("startBtn").addEventListener("click", function () {
//   var timeleft = 15;

// var countdown = setInterval(function function1() {
//   document.getElementById("countdown").innerHTML =
//     timeleft + " " + "seconds remaining";

//   timeleft -= 1;
//   if (timeleft <= 0) {
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Time is up!";
//   }
// }, 1000);
// console.log(countdown);
