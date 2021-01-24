const quizQuestions = {
    firstQuestion: {
        question: "Commoly used data types DO NOT include: ",
        answer: "3. alerts",
        get chooseFirst () {
            return this.answer === "1. strings";
        },
        get chooseSecond () {
            return this.answer === "2. booleans";
        },
        get chooseThird () {
            return this.answer === "3. alerts";
        },
        get chooseFourth () {
            return this.answer === "4. numbers";
        }
    },
    secondQuestion: {
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
    thirdQuestion: {
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
    fourthQuestion: {
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
    fifthQuestion: {
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
}


// Test: Question 5.
console.log(quizQuestions.fifthQuestion.chooseFirst);
console.log(quizQuestions.fifthQuestion.chooseSecond);
console.log(quizQuestions.fifthQuestion.chooseThird);
console.log(quizQuestions.fifthQuestion.chooseFourth);