let userWords = [];
let computerWords = [];
let currentTurn = 0;

function startGame() {
    // Clear previous game data
    userWords = [];
    computerWords = [];
    currentTurn = 0;

    // Prompt the user for the initial word
    const initialUserWord = prompt("Enter your first word:");
    if (initialUserWord) {
        userWords.push(initialUserWord);
        playGame();
    }
}

function playGame() {
    // Check if it's the user's turn or computer's turn
    if (currentTurn % 2 === 0) {
        // User's turn
        const userWord = prompt("Enter your word:");
        if (userWord) {
            userWords.push(userWord);
        } else {
            // User canceled the prompt, end the game
            endGame("Game over! Your final score is: " + userWords.length);
            return;
        }
    } else {
        // Computer's turn
        const computerWord = generateComputerWord();
        computerWords.push(computerWord);
        
        // Prompt the user for their first word and the computer's word
        const userWordsInput = prompt(`Computer's word: ${computerWord}\nEnter your word and computer's word separated by a comma (e.g., userWord, computerWord):`);
        if (userWordsInput) {
            const [userWord, computerWordInput] = userWordsInput.split(",").map(word => word.trim());
            if (userWord === userWords[userWords.length - 1] && computerWordInput === computerWord) {
                userWords.push(userWord);
                computerWords.push(computerWordInput);
            } else {
                endGame("Game over! Your final score is: " + userWords.length);
                return;
            }
        } else {
            // User canceled the prompt, end the game
            endGame("Game over! Your final score is: " + userWords.length);
            return;
        }
    }

    // Increment the turn counter
    currentTurn++;

    // Update the display
    updateDisplay();

    // Continue the game
    playGame();
}

function generateComputerWord() {
    // Generate a random word for the computer
    const words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango"];
    return words[Math.floor(Math.random() * words.length)];
}

function updateDisplay() {
    const userWordDisplay = document.getElementById("userWordDisplay");
    const computerWordDisplay = document.getElementById("computerWordDisplay");
    userWordDisplay.innerHTML = "<h2>User's Words</h2>" + userWords.map(word => `<p>${word}</p>`).join("");
    computerWordDisplay.innerHTML = "<h2>Computer's Words</h2>" + computerWords.map(word => `<p>${word}</p>`).join("");
}

function endGame(message) {
    alert(message);
    // Optionally, you can perform any cleanup tasks here
}

// Start the game
startGame();
