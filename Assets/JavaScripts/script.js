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

//Helper Function 2: button creator => extract string from a list and produce a ready-to-append children element.
const createOption = (string) => {
    let buttonSection = document.createElement("button");
    buttonSection.innerText = string;
    buttonSection.id = "nextQuestion";

    //Feature: click to next question.
    const nextQuestion = () => {
        if (counter === (quizQuestions.length - 1)) {
            counter = 0;
            printQuestion(counter);
        } else {
            counter ++;
            printQuestion(counter);
        }
    }

    buttonSection.addEventListener("click", nextQuestion);
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
    
    // let newQuestion = createQuestion(currentObject);
    let questionSection = document.createElement("p");
    questionSection.innerText = currentObject.question;
    questionSection.id = "question";
    main.appendChild(questionSection);

    let optionGroup = document.createElement("block");
    optionGroup.id = "btn-group";

    let list = currentObject.options;
    for (let i = 0; i < list.length; i++) {
        // let option = createOption(list[i]);
        let buttonSection = document.createElement("button");
        buttonSection.innerText = list[i];

        //Feature: click to next question.
        const correctNext = () => {
            if (counter === (quizQuestions.length - 1)) {
                counter = 0;
                getScore();
            } else {
                counter ++;
                printQuestion(counter);
            }
        }

        //Feature: click to next question.
        const wrongNext = () => {
            if (counter === (quizQuestions.length - 1)) {
                counter = 0;
                if (secondsLeft <= 15) {
                    secondsLeft = 0;
                    getScore();
                } else {
                    getScore();
                }
                
            } else {
                counter ++;
                secondsLeft -= 15;
                printQuestion(counter);
            }
        }



        var penalty;
        if (list[i] === currentObject.answer) {
            buttonSection.addEventListener("click", correctNext);
        } else {
            buttonSection.addEventListener("click", wrongNext);
        }

        optionGroup.appendChild(buttonSection);
    }

    main.appendChild(optionGroup);
    return main;
}

// Feature: click to start quiz.
var startButton = document.getElementById("startQuiz");

const startQuiz = () => {
    counter = 0;
    printQuestion(counter);
    setTime();
}

startButton.addEventListener("click", startQuiz);

// Feature: timer.
var timer = document.getElementById("timer")
var secondsLeft = 75;
var timerInterval;

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time left: " + secondsLeft + " seconds";
  
    if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        secondsLeft = 0;
        getScore();
    }
  
    }, 1000);
}


// Result Page:
const getScore = () => {
    clearInterval(timerInterval);
    let main = document.querySelector("main");
    main.innerText = "";
    timer.textContent = "Time Up!";

    let scoreTitle = document.createElement("h1");
    scoreTitle.innerText = "All done!"
    main.appendChild(scoreTitle);

    let scoreMessage = document.createElement("p");
    scoreMessage.innerHTML = `Your final score is ${secondsLeft}! Please enter your initials:`;
    main.appendChild(scoreMessage);

    let initialsInput = document.createElement("input");
    initialsInput.id = "initials";
    main.appendChild(initialsInput);

    let breakLine = document.createElement("br");
    main.appendChild(breakLine);

    let submitButton = document.createElement("button");
    submitButton.innerText = "Submit"
    submitButton.addEventListener("click", storeScore);
    main.appendChild(submitButton);
}

// Store initial and score to localstorage.
const storeScore = () => {
    let userInitials = document.getElementById("initials").value;
    localStorage.setItem(userInitials, secondsLeft);
    viewHighScore();
}

// Print high-score page
const viewHighScore = () => {
    let main = document.querySelector("main");
    main.innerHTML = "";

    let block = document.createElement("fieldset");
    let title = document.createElement("legend");
    title.innerText = "High-score Board";

    main.appendChild(block);
    main.children[0].appendChild(title);

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        main.children[0].innerHTML += `<h2> Log #${i+1}: ${key} - ${value} </h2> <br/>`;
    }

    let homeBtn = document.createElement("button");
    homeBtn.innerText = "Go Back";
    homeBtn.addEventListener("click", printHome);
    main.children[0].appendChild(homeBtn);

    let clearBtn = document.createElement("button");
    clearBtn.innerText = "Clear Scoreboard";
    clearBtn.addEventListener("click", clearScore);
    main.children[0].appendChild(clearBtn);
}

// Link the high score button in nav bar.
let viewBtn = document.getElementById("highScores");
viewBtn.addEventListener("click", viewHighScore);

// Building the clear button in high score page
const clearScore = () => {
    localStorage.clear();
    viewHighScore();
}

const printHome = () => {
    let main = document.querySelector("main");
    main.innerHTML = "";

    let title = document.createElement("h1");
    title.innerText = "Coding Quiz Challenge";
    main.appendChild(title);

    let message = document.createElement("p");
    message.innerText = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time  by ten seconds!";
    main.appendChild(message);

    let startBtn = document.createElement("button");
    startBtn.innerText = "Start Quiz";
    startBtn.id = "startQuiz";
    startBtn.addEventListener("click", startQuiz);
    main.appendChild(startBtn)
}

