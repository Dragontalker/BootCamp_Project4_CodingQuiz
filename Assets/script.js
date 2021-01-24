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
        firstOption: "1. quotes",
        secondOption: "2. curly brackets",
        thirdOption: "3. parentheses",
        fourthOption: "4. square brackets",
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
    thirdQuestion = {
        question: "Arrays in JavaScript can be used to store ________.",
        answer: "4. all of the above",
        firstOption: "1. numbers and strings",
        secondOption: "2. other arrays",
        thirdOption: "3. booleans",
        fourthOption: "4. all of the above",
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
    fourthQuestion = {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answer: "2. curly brackets",
        firstOption: "1. commas",
        secondOption: "2. curly brackets",
        thirdOption: "3. quotes",
        fourthOption: "4. parentheses",
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
    fifthQuestion = {
        question: "A very useful tool used during development and debugging for print content to the debugger is:",
        answer: "4. console.log",
        firstOption: "1. JavaScript",
        secondOption: "2. terminal/bash",
        thirdOption: "3. for loops",
        fourthOption: "4. console.log",
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
    }
]

// Test Question 5:
console.log(quizQuestions[4].chooseFirst);
console.log(quizQuestions[4].chooseSecond);
console.log(quizQuestions[4].chooseThird);
console.log(quizQuestions[4].chooseFourth);


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