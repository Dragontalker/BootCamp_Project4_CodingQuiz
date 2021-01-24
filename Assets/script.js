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
    }
}


// Test: Question 2.
console.log(quizQuestions.secondQuestion.chooseFirst);
console.log(quizQuestions.secondQuestion.chooseSecond);
console.log(quizQuestions.secondQuestion.chooseThird);
console.log(quizQuestions.secondQuestion.chooseFourth);