const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("What is your name? ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateAnswer = input.question("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswers = [];
let grade = "";
let question;

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];

let correctAnswers = ["sally ride", "true", "40","trajectory", "3"];

 // TODO 1.1b: Ask for candidate's name //
function askForName(candidateName) {
  console.log(`Hello ${candidateName}.`);
}

// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion(candidateAnswer) {
  
}

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
function gradeQuestion(candidateAnswer) { 
  if (candidateAnswer === "Sally Ride") {
      grade = "Correct";
  } else {
     grade = "Incorrect";
  }
  console.log(grade);
}

function askQuestions(questions) {
  for (let i=0; i<questions.length; i++){
  console.log(questions[i]);
 }
}

for (let i = 0; i < questions.length; i++){
  candidateAnswers.push(input.question(questions[i]));
}

for (let i = 0; i < candidateAnswers.length; i++){
  console.log(`The Question: ${questions[i]} \n Your answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]}`);
}

let gradeTotal = 0;
let gradePercent;

function gradeQuiz(candidateAnswers){
  for (i=0; i< candidateAnswers.length; i++){
    if ((candidateAnswers[i]) === (correctAnswers[i])){
      gradeTotal = (gradeTotal + 1);
    }
  }
   let gradePercent = (gradeTotal/questions.length)*100;
   console.log(`Overall Grade: ${gradePercent}% (${gradeTotal} out of ${questions.length} answers correct)`);
   if (gradeTotal > 3){
    console.log("Status: Passed");
    } else if (gradeTotal <= 3) {
    console.log("Status: Failed");
    }
    return gradePercent;
}

 // TODO 1.1c: Ask for candidate's name //
function runProgram() {
  askForName(candidateName);
  askQuestion(candidateAnswer);
  askQuestions();
  gradeQuestion(candidateAnswer);
  gradeQuiz(this.candidateAnswers);
}

function askQuestions(candidateAnswers) {
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};