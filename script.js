const questions = [
    {
        question: "What is the primary color that can't be created by mixing other colors?",
        options: ["Red", "Green", "Blue", "Yellow"],
        answer: 0 // Index of the correct answer in the options array
    },
    // Add 9 more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultsContainer = document.getElementById("results-container");
const scoreElement = document.getElementById("score");
const answersContainer = document.getElementById("answers-container");

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;

    optionsContainer.innerHTML = ""; // Clear previous options
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestion];
    if (selectedOption === questionData.answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    resultsContainer.style.display = "block";
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;

    questions.forEach((questionData, index) => {
        const answerElement = document.createElement("p");
        answerElement.textContent = `Question ${index + 1}: ${questionData.options[questionData.answer]}`; // Corrected line
        answersContainer.appendChild(answerElement);
    });
}

// Initialize the quiz
loadQuestion();
