// Selecting elements
const hintElement = document.getElementById('hint span');
const wordDisplayElement = document.getElementById('wordDisplay');
const guessInputElement = document.getElementById('guessInput');
const submitButton = document.getElementById('submitBtn');
const hintButton = document.getElementById('hintBtn');
const revealButton = document.getElementById('revealBtn');
const resultElement = document.getElementById('result');


let currentWord = '';
let hint = '';
let revealedLetters = 0;

function randomWord() {
let randomIndex = wordList[Math.floor(Math.random() * wordList.length)];
let currentWord = randomIndex.word;
let hint = wordList[randomIndex].hint;
hintElement.innerText=randomIndex.hint;
let revealedLetters = 0;


let displayedWord = '';
for (let i = 0; i < currentWord.length; i++) {
    displayedWord += '<input type="text" disabled>';
    wordDisplayElement.innerHTML = displayedWord;
}
}

randomWord();


// Event listener for submit button
submitButton.addEventListener('click', () => {
    const userGuess = guessInputElement.value.toLowerCase();
    if (userGuess === currentWord) {
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Wrong. Try again!';
    }
});

// Event listener for hint button
hintButton.addEventListener('click', () => {
    if (revealedLetters < currentWord.length) {
        displayedWord = displayedWord.split('');
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === ' ' || displayedWord[i] !== '_') {
                continue;
            }
            displayedWord[i] = currentWord[i];
            revealedLetters++;
            break;
        }
        wordDisplayElement.textContent = displayedWord.join('');
    }
});

// Event listener for reveal button
revealButton.addEventListener('click', () => {
    resultElement.textContent = `The word is: ${currentWord}`;
});

const resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', randomWord);
