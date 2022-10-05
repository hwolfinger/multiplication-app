const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score")

// let score = 0;
let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`

// this was interesting: sahand's code was as follows:
// questionEl.innerText = 'What is ${num1} multiplied by ${num2} ?' but it wouldn't work
// this doesn't work either:
// questionEl.innerText = 'What is `${num1}` multiplied by `${num2}` ?

// played around and figured out this way
//questionEl.innerText = "What is " + `${num1}` + " multiplied by " + `${num2}` + "?"

// then realized he was using backticks not single quotes
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`

const correctAnswer = num1 * num2;

// TIL: "+" turns .value into number, "typeof"
formEl.addEventListener("submit", ()=>{
    const userAnswer = +inputEl.value
    console.log(userAnswer, typeof userAnswer)
    if (userAnswer === correctAnswer) {
        score++;
        console.log(score);
        updateLocalStorage()
    } else {
        score--;
        console.log(score);
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}