
    const hintElement = document.getElementById('hint').querySelector('span');
    const wordDisplayElement = document.getElementById('wordDisplay');
    const guessInputElement = document.getElementById('guessInput');
    const submitButton = document.getElementById('submitBtn');
    const hintButton = document.getElementById('hintBtn');
    const revealButton = document.getElementById('revealBtn');
    const resultElement = document.getElementById('result');

    

function randomWord() {
  let randomIndex = Math.floor(Math.random() * wordList.length);
  currentWord = wordList[randomIndex].word;
  hint = wordList[randomIndex].hint;
  hintElement.textContent = hint;
  revealedLetters = 0;

  let displayedWord = '';
 
  wordDisplayElement.textContent = displayedWord;
}

    randomWord();


submitButton.addEventListener('click', () => {
    const userGuess = guessInputElement.value.toLowerCase(); 
    const isCorrect = wordList.some((wordObject) => wordObject.word === userGuess);
    if (isCorrect) {
      resultElement.textContent = 'Correct!';
      resultElement.classList.add('show');
      randomWord();
    } else {
      resultElement.textContent = 'Incorrect. Try again!';
      resultElement.classList.add('show');
    }
    guessInputElement.value = '';
  });
  


hintButton.addEventListener('click', () => {
  resultElement.textContent = `Number of letters in the word: ${currentWord.length}`;
  resultElement.classList.add('show');
});

revealButton.addEventListener('click', () => {
    resultElement.textContent = `The word is: ${currentWord}`;
    resultElement.classList.add('show');
  });
  
  const resetButton = document.querySelector('.reset-btn');
console.log(resetButton); // Check if resetButton is not null
resetButton.addEventListener('click', () => {
    console.log("Reset button clicked"); // Check if this message appears in the console when the button is clicked
    randomWord(); 
});
CSS.registerProperty({
  name: "--gradientColor1",
  syntax: '<color>',
  inherits: true,
  initialValue: "#09ec3a"
});

CSS.registerProperty({
  name: "--gradientColor2",
  syntax: '<color>',
  inherits: true,
  initialValue: "#040c27"
});

CSS.registerProperty({
  name: "--gradientColor3",
  syntax: '<color>',
  inherits: true,
  initialValue: "#37a5ee"
});
