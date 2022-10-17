const words = [
  "californication",
  "plataforma5",
  "black",
  "summer",
  "flea",
  "aeroplane",
  "peppers",
  "unlimited",
  "arcadium",
  "love",
  "getaway",
  "stadium",
  "quixoticelixer",
  "quarter",
  "snow",
  "dylan",
  "zephyr",
  "funky",
  "chili",
];

let randomWordHTML = document.getElementById('randomWord');
let text = document.getElementById('text')
let timeSpan = document.getElementById('timeSpan')
let scoreHTML = document.getElementById('score')
let endGame = document.getElementById('end-game-container')
let mainDiv = document.querySelector('.main')

let randomWord;
let time = 10;
let score = 0;
let interval = setInterval(updateTime, 1000);

addToDOM();

text.addEventListener('input', e => {
    let palabraIngresada = e.target.value.toLowerCase();
    
    if (palabraIngresada === randomWord) {
        time += 3;
        e.target.value = '';
        addToDOM();
        updateScore();
    }
})


function randomWords() {
    randomWord = words[Math.floor(Math.random() * words.length)]
    return randomWord;
}

function addToDOM() {
    randomWordHTML.textContent = randomWords().charAt(0).toUpperCase() + randomWord.slice(1);
}

function updateTime() {
    time--;
    timeSpan.textContent = time + "s";
    if (time === 0) {
        clearInterval(interval)
        gameOver();
    }   
}

function updateScore() {
    score++;
    scoreHTML.textContent = score;
}

function gameOver() {
    mainDiv.style.display = "none"
    endGame.innerHTML = '<h1>Te has quedado sin tiempo!</h1> <p>Puntuación final: ' + score + '</p><button onclick="location.reload()">Volve a empezar</button>'
}