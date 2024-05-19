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
        updateComputerWordDisplay(generateComputerWord());
    }
}

function playGame() {
    // Check if it's the user's turn or computer's turn
    if (currentTurn % 2 === 0) {
        // User's turn
        const userWord1 = prompt("Enter your next word based on the sequence:");
        if (userWord1) {
            userWords.push(userWord1);
            updateComputerWordDisplay(generateComputerWord());

            // Check if the user has followed the correct sequence
            if (userWords.length >= 2 && userWords[userWords.length - 1] !== userWords[userWords.length - 2]) {
                endGame("Incorrect sequence! Your final score is: " + (userWords.length - 1));
                return;
            }
        } else {
            // User canceled the prompt, end the game
            endGame("Game over! Your final score is: " + (userWords.length - 1));
            return;
        }
    } else {
        // Computer's turn
        const computerWord1 = generateComputerWord();
        const computerWord2 = generateComputerWord();
        const userWord2 = prompt("Enter your next word based on the sequence:");
        if (userWord2) {
            userWords.push(userWord2);

            // Check if the user has followed the correct sequence
            if (userWords.length >= 3 && userWords[userWords.length - 1] !== computerWord1) {
                endGame("Incorrect sequence! Your final score is: " + (userWords.length - 1));
                return;
            }

            computerWords.push(computerWord1);
            computerWords.push(computerWord2);
            updateComputerWordDisplay(computerWord1);
        } else {
            // User canceled the prompt, end the game
            endGame("Game over! Your final score is: " + (userWords.length - 1));
            return;
        }
    }

    // Increment the turn counter
    currentTurn++;

    // Continue the game
    playGame();
}

function generateComputerWord() {
    // Generate a random word for the computer
    const words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango"];
    return words[Math.floor(Math.random() * words.length)];
}

function updateComputerWordDisplay(word) {
    const computerWordDisplay = document.getElementById("computerWordDisplay");
    computerWordDisplay.innerText = "Computer's word: " + word;
}

function endGame(message) {
    alert(message);
    // Optionally, you can perform any cleanup tasks here
}
