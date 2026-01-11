const questionContainerEl = document.getElementById('question-container');
const buttonGridEl = document.getElementById('button-grid');
const nextButton = document.getElementById('next-button');
const scoreEl = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Function to fetch questions from an API
async function fetchQuestions(subject) {
    try {
        // Using Open Trivia Database API (no key needed)
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${subject}&type=multiple`);
        const data = await response.json();
        questions = data.results;
        startGame();
    } catch (error) {
        console.error("Error fetching questions:", error);
        questionContainerEl.innerText = "Failed to load questions. Please try again later.";
    }
}

// Map subjects to Open Trivia API category IDs (e.g., Science: Computers is 18)
// You can adjust these categories or let the user choose
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.innerText = score;
    nextButton.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(questionData) {
    questionContainerEl.innerText = decodeHTMLEntities(questionData.question);
    
    // Combine correct and incorrect answers and shuffle them
    const answers = [...questionData.incorrect_answers, questionData.correct_answer];
    answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = decodeHTMLEntities(answer);
        button.classList.add('btn');
        if (answer === questionData.correct_answer) {
            button.dataset.correct = true; // Mark the correct answer for checking
        }
        button.addEventListener('click', selectAnswer);
        buttonGridEl.appendChild(button);
    });
}

function resetState() {
    // Clear previous buttons and hide next button
    while (buttonGridEl.firstChild) {
        buttonGridEl.removeChild(buttonGridEl.firstChild);
    }
    nextButton.classList.add('hide');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    // Apply visual feedback
    setStatusClass(selectedButton, correct);
    Array.from(buttonGridEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true; // Disable all buttons after one selection
    });

    if (correct) {
        score += 10;
        scoreEl.innerText = score;
    }

    // Show the next button if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        // Game over message or restart functionality
        questionContainerEl.innerText = `Game Over! Your final score is ${score} out of ${questions.length * 10}.`;
        nextButton.innerText = 'Restart Game';
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(button, correct) {
    clearStatusClass(button);
    if (correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
}

function clearStatusClass(button) {
    button.classList.remove('correct');
    button.classList.remove('wrong');
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        // Restart the game (you might want a more formal restart function)
        fetchQuestions(18); // Fetch new questions or restart current set
    }
});

// The API returns HTML entities like &quot; so we need to decode them
function decodeHTMLEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

// Initialize the game by fetching questions for a specific subject (e.g., Category 18 for Science: Computers)
fetchQuestions(18);