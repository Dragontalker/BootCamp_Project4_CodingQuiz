const quizQuestions = [
    firstQuestion = {
        question: "Commoly used data types DO NOT include: ",
        answer: "3. alerts",
        firstOption: "1. strings",
        secondOption: "2. booleans",
        thirdOption: "3. alerts",
        fourthOption: "4. numbers",
        get chooseFirst () {
            return this.answer === this.firstOption;
        },
        get chooseSecond () {
            return this.answer === this.secondOption;
        },
        get chooseThird () {
            return this.answer === this.thirdOption;
        },
        get chooseFourth () {
            return this.answer === this.fourthOption;
        }
    },
    secondQuestion = {
        question: "The condition in an if / else statement is enchosed within ________.",
        answer: "3. parentheses",
        get chooseFirst () {
            return this.answer === "1. quotes";
        },
        get chooseSecond () {
            return this.answer === "2. curly brackets";
        },
        get chooseThird () {
            return this.answer === "3. parentheses";
        },
        get chooseFourth () {
            return this.answer === "4. square brackets";
        }
    },
    thirdQuestion = {
        question: "Arrays in JavaScript can be used to store ________.",
        answer: "4. all of the above",
        get chooseFirst () {
            return this.answer === "1. numbers and strings";
        },
        get chooseSecond () {
            return this.answer === "2. other arrays";
        },
        get chooseThird () {
            return this.answer === "3. booleans";
        },
        get chooseFourth () {
            return this.answer === "4. all of the above";
        }
    },
    fourthQuestion = {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answer: "2. curly brackets",
        get chooseFirst () {
            return this.answer === "1. commas";
        },
        get chooseSecond () {
            return this.answer === "2. curly brackets";
        },
        get chooseThird () {
            return this.answer === "3. quotes";
        },
        get chooseFourth () {
            return this.answer === "4. parentheses";
        }
    },
    fifthQuestion = {
        question: "A very useful tool used during development and debugging for print content to the debugger is:",
        answer: "4. console.log",
        get chooseFirst () {
            return this.answer === "1. JavaScript";
        },
        get chooseSecond () {
            return this.answer === "2. terminal/bash";
        },
        get chooseThird () {
            return this.answer === "3. for loops";
        },
        get chooseFourth () {
            return this.answer === "4. console.log";
        }
    }
]

// Test Question 1:
console.log(quizQuestions[0].chooseFirst);
console.log(quizQuestions[0].chooseSecond);
console.log(quizQuestions[0].chooseThird);
console.log(quizQuestions[0].chooseFourth);


// counter = 0;

// const printQuestion = (index) => {
//     let currentQuestion = quizQuestions[index];
//     let main = document.querySelector("main");
    
//     let newQuestion = document.createElement("h2");
//     newQuestion.innerText = currentQuestion.question;

//     let newAnswers = document.createElement("ul");
    
//     let newFirstOption = document.createElement("li")
//     newFirstOption.innerText = currentQuestion.
// }