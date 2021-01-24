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

let questionObject = list[index];
let currentQuestion = questionObject.question;

// Helper Function 1: question creator => exact string form object and produce a ready-to-append children element.
const createQuestion = (obj) => {
    let questionSection = document.createElement("p");
    questionSection.innerText = obj.question;
    questionSection.id = "question";
    return questionSection;
}

//Helper Function 2: button creator => exact string from a list and produce a ready-to-append children element.
const createOption = (string) => {
    let buttonSection = document.createElement("button");
    buttonSection.innerText = string;
    buttonSection.id = "option";

    let itemSection = document.createElement("li");
    itemSection.appendChild(buttonSection);
    return itemSection;
}

// Helper Function 3: list creator => take a list of strings and product a list of button elements.
const createList = (list) => {
    let listSection = document.createElement("ul");
    for (let i = 0; i < list.length; i++) {
        let option = createOption(list[i]);
        listSection.appendChild(option);
    }
    return listSection;
}

let test = createOption("dasdas");

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