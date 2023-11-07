const words = ["apple", "beach", "cloud", "dream", "eagle", "flame", "grape", "happy", "ivory", "joker"];

// Select a random word from the array
const randomIndex = Math.floor(Math.random() * words.length);
const targetWord = words[randomIndex];

let attempts = 5;
let wordDisplay = Array(targetWord.length).fill('-');

const wordContainer = document.getElementById('word-container');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const attemptsSpan = document.getElementById('attempts');

displayWordDisplay();

submitButton.addEventListener('click', handleGuess);

function handleGuess() {
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 5 || !/^[a-z]+$/.test(guess)) {
        alert('Please enter a valid 5-letter word.');
        return;
    }

    if (attempts === 0) {
        alert('You have run out of attempts. The word was ' + targetWord + '.');
        disableInput();
        return;
    }

    displayResult(guess);
    attempts--;

    if (wordDisplay.join('') === targetWord) {
        alert('Congratulations! You guessed the word: ' + targetWord);
        disableInput();
    } else {
        attemptsSpan.textContent = attempts;
    }
    guessInput.value = ''; // Clear the input field after each guess
}

function displayResult(guess) {
    const result = [];
    for (let i = 0; i < targetWord.length; i++) {
        if (targetWord[i] === guess[i]) {
            result.push('green');
            wordDisplay[i] = targetWord[i];
        } else if (targetWord.includes(guess[i])) {
            result.push('yellow');
        } else {
            result.push('gray');
        }
    }
    displayWordDisplay();
    createWordElement(guess, result);
}

function displayWordDisplay() {
    wordContainer.innerHTML = ''; // Clear the word-container
    wordDisplay.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        wordContainer.appendChild(span);
    });
}

function createWordElement(word, result) {
    const wordElement = document.createElement('div');
    wordElement.textContent = '';

    result.forEach((color, index) => {
        const span = document.createElement('span');
        span.textContent = word[index];
        span.style.color = color;
        wordElement.appendChild(span);
    });

    wordContainer.appendChild(wordElement); // Append the new word result
}

function disableInput() {
    guessInput.disabled = true;
    submitButton.disabled = true;
}
