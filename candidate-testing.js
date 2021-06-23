const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("What is your name? ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = input.question("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let candidateAnswers = [];

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", "40","Trajectory", "3"]

 // TODO 1.1b: Ask for candidate's name //
function askForName(candidateName) {
  console.log(`Hello ${candidateName}.`);
}

for (let i = 0; i < questions.length; i++){
  candidateAnswers.push(input.question(questions[i]));
}

for (let i = 0; i < candidateAnswers.length; i++){
  console.log(`The Question: ${questions[i]} \n Your answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]}`);
}

 // TODO 1.1c: Ask for candidate's name //
function runProgram() {
  askForName(candidateName);
  askQuestions();
  gradeQuiz(this.candidateAnswers);
}

function askQuestions(candidateAnswers) {
  
}

let grade = 0;
function gradeQuiz(candidateAnswers) {
  for (let i = 0; i < candidateAnswers.length; i++){
    if ((candidateAnswers[i]) = (correctAnswers[i])){
    let gradeTotal = grade + 1;
    let gradePercent = (gradeTotal/candidateAnswers.length)*100;
    console.log(`Overall Grade: ${gradePercent}% (${gradeTotal} out of ${candidateAnswers.length} answers correct)`);
    if (gradeTotal > 3){
    console.log("Status: Passed");
    } else if (gradeTotal <= 3) {
    console.log("Status: Failed");
     }
    }
  }
} 
/* // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion(candidateAnswer) {
  console.log(question);
}*/
/*
function askQuestions(questions) {
  for (let i=0; i<questions.length; i++){
  console.log(questions[i]);
}
}
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
function gradeQuiz(candidateAnswers) {
  let grade; 
  if (candidateAnswer = "Sally Ride") {
      grade = "Correct";
  } else {
     grade = "Incorrect";
  }
  console.log(grade);
}*/

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  //question: question,
  correctAnswer: correctAnswer,
 // candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};