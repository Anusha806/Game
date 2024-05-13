
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
    } else {
      resultElement.textContent = 'Incorrect. Try again!';
    }
    guessInputElement.value = '';
  });
  

// Event listener for hint button
// hintButton.addEventListener('click', () => {
//     if (revealedLetters < currentWord.length) {
//         displayedWord = displayedWord.split('');
//         for (let i = 0; i < currentWord.length; i++) {
//             if (currentWord[i] === ' ' || displayedWord[i] !== '_') {
//                 continue;
//             }
//             displayedWord[i] = currentWord[i];
//             revealedLetters++;
//             break;
//         }
//         wordDisplayElement.textContent = displayedWord.join('');
//     }
// });

hintButton.addEventListener('click', () => {
  resultElement.textContent = `Number of letters in the word: ${currentWord.length}`;
});

revealButton.addEventListener('click', () => {
    resultElement.textContent = `The word is: ${currentWord}`;
  });
  
  const resetButton = document.querySelector('.reset-btn');
  resetButton.addEventListener('click', () => {
      randomWord(); 
  });