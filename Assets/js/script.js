class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = 0;
    this.questionIndex = 0;
  }
  getQuestionIndex() {
    return this.question[this.questionIndex];
  }
  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}
class Question {
  constructor(text, choice, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

function displayQuestion() {
  if (Quiz.isEnded()) {
    showScores();
  } else {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
  }
}

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

//   var downloadTimer = setInterval(function function1() {
//     document.getElementById("countdown").innerHTML =
//       timeleft + " " + "seconds remaining";

//     timeleft -= 1;
//     if (timeleft <= 0) {
//       clearInterval(downloadTimer);
//       document.getElementById("countdown").innerHTML = "Time is up!";
//     }
//   }, 1000);
// });
// console.log(countdown);
