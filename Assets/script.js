const question = {
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
    }
}

// Test: Question 1.
console.log(question.firstQuestion.chooseFirst);
console.log(question.firstQuestion.chooseSecond);
console.log(question.firstQuestion.chooseThird);
console.log(question.firstQuestion.chooseFourth);