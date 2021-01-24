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
    }
}


// Test: Question 3.
console.log(quizQuestions.thirdQuestion.chooseFirst);
console.log(quizQuestions.thirdQuestion.chooseSecond);
console.log(quizQuestions.thirdQuestion.chooseThird);
console.log(quizQuestions.thirdQuestion.chooseFourth);