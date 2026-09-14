console.log("jeg er i guessnumber");

const lblMessage = document.querySelector(".message");
const lblNumber = document.querySelector(".number");
const lblScore = document.querySelector(".score");
const inpGuess = document.querySelector(".guess");
const inpHint = document.querySelector(".hint");

const secretNumber = Math.trunc(Math.random() * 20) + 1;
lblNumber.textContent = "?";

let score = 20;

function testNumber() {
    console.log("testNumber");

    let guess = Number(inpGuess.value);
    console.log(guess);

    if (!guess) {
        lblMessage.textContent = "⛔ No Number";
    } else if (guess === secretNumber) {
        lblMessage.textContent = "🎉 Du har gættet tallet";
        lblNumber.textContent = secretNumber;
    } else if (guess > secretNumber) {
        lblMessage.textContent = "Too high";
        score--;
        lblScore.textContent = score;
    } else if (guess < secretNumber) {
        lblMessage.textContent = "Too low";
        score--;
        lblScore.textContent = score;
    }
}

function hint(){
    console.log(secretNumber)
    lblMessage.textContent = secretNumber;
}
function again(){
    score = 20
    lblNumber.textContent = "?";
    lblMessage.textContent = "Start guessing...";
    lblScore.textContent = score;
    inpGuess.value = "";
}


document.querySelector(".check").addEventListener("click", testNumber);
document.querySelector(".hint").addEventListener("click", hint);
document.querySelector(".again").addEventListener("click", again)