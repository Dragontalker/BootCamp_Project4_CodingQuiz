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

// Helper Function 1: question creator => exact string form object and produce a ready-to-append children element.
const createQuestion = (obj) => {
    let questionSection = document.createElement("p");
    questionSection.innerText = obj.question;
    questionSection.id = "question";
    return questionSection;
}

//Helper Function 2: button creator => extract string from a list and produce a ready-to-append children element.
const createOption = (string) => {
    let buttonSection = document.createElement("button");
    buttonSection.innerText = string;
    buttonSection.id = "option";
    return buttonSection;
}

// Helper Function 3: list creator => extract a list of strings from object and product a list of button elements.
const createList = (obj) => {
    let list = obj.options;
    for (let i = 0; i < list.length; i++) {
        let option = createOption(list[i]);
        listSection.appendChild(option);
    }
    return listSection;
}

counter = 0;

const printQuestion = (pos) => {
    let currentObject = quizQuestions[pos];
    let main = document.querySelector("main");
    main.innerHTML = "";
    
    let newQuestion = createQuestion(currentObject);
    main.appendChild(newQuestion);

    let optionGroup = document.createElement("block");
    optionGroup.id = "btn-group";

    let list = currentObject.options;
    for (let i = 0; i < list.length; i++) {
        let option = createOption(list[i]);
        optionGroup.appendChild(option);
    }

    main.appendChild(optionGroup);
    return main;
}

const toQ1 = () => {
    printQuestion(0);
}

const toQ2 = () => {
    printQuestion(1);
}

const toQ3 = () => {
    printQuestion(2);
}

const toQ4 = () => {
    printQuestion(3);
}

const toQ5 = () => {
    printQuestion(4);
}

var goQ1 = document.getElementById("Q1");
goQ1.addEventListener("click", toQ1);

var goQ2 = document.getElementById("Q2");
goQ2.addEventListener("click", toQ2);

var goQ3 = document.getElementById("Q3");
goQ3.addEventListener("click", toQ3);

var goQ4 = document.getElementById("Q4");
goQ4.addEventListener("click", toQ4);

var goQ5 = document.getElementById("Q5");
goQ5.addEventListener("click", toQ5);
