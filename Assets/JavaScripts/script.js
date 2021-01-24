const quizQuestions = [
    firstQuestion = {
        question: "Commoly used data types DO NOT include: ",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    secondQuestion = {
        question: "The condition in an if / else statement is enchosed within ________.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    thirdQuestion = {
        question: "Arrays in JavaScript can be used to store ________.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    fourthQuestion = {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "curly brackets"
    },
    fifthQuestion = {
        question: "A very useful tool used during development and debugging for print content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
]

// Helper Function 1: question creator => exact string form object and produce a read-to-append children element.
const createQuestion = (list, index) => {
    // Exact the question object.
    let questionObject = list[index];
    let currentQuestion = questionObject.question;
    
    // Create the element which contains the question from object.
    let questionSection = document.createElement("p");
    questionSection.innerText = currentQuestion;
    questionSection.style.fontWeight = "bold";
    return questionSection;
}

// Test
let test1 = createQuestion(quizQuestions, 0);
document.body.children[1].appendChild(test1);

// counter = 0;

// const printQuestion = (index) => {
//     let currentQuestion = quizQuestions[index];
//     let main = document.querySelector("main");
//     main.innerHTML = "";
    
//     let newQuestion = document.createElement("h2");
//     newQuestion.innerText = currentQuestion.question;
    
//     let newFirstOption = document.createElement("li");
//     newFirstOption.innerText = currentQuestion.firstOption;

//     let newSecondOption = document.createElement("li");
//     newSecondOption.innerText = currentQuestion.secondOption;

//     let newThirdOption = document.createElement("li");
//     newThirdOption.innerTest = currentQuestion.thirdOption;

//     let newFourthOption = document.createElement("li");
//     newFourthOption.innerText = currentQuestion.fourthOption;

//     let newAnswers = document.createElement("ul");
//     newAnswers.appendChild(newFirstOption);
//     newAnswers.appendChild(newSecondOption);
//     newAnswers.appendChild(newThirdOption);
//     newAnswers.appendChild(newFourthOption);




// }