const questions = [
    {
        question: "Which element of art is used to define shape and form?",
        options: ["Color", "Line", "Texture", "Value"],
        answer: 1 // Index of the correct answer in the options array
    },
    {
        question: "What term describes the surface quality of an artwork?",
        options: ["Hue", "Texture", "Composition", "Form"],
        answer: 1
    },
    {
        question: "Which painting technique uses pigment mixed with hot wax?",
        options: ["Watercolor", "Tempera", "Encaustic", "Acrylic"],
        answer: 2
    },
    {
        question: "What type of sculpture projects from a flat background?",
        options: ["Relief", "In the round", "Mobile", "Installation"],
        answer: 0
    },
    {
        question: "Which art movement is associated with distorted figures and dreamlike imagery?",
        options: ["Impressionism", "Realism", "Surrealism", "Pop Art"],
        answer: 2
    },
    {
        question: "What term refers to the relative lightness or darkness of a color?",
        options: ["Saturation", "Hue", "Value", "Intensity"],
        answer: 2
    },
    {
        question: "Which architectural style features rounded arches and domes?",
        options: ["Gothic", "Romanesque", "Baroque", "Art Nouveau"],
        answer: 1
    },
    {
        question: "What technique creates depth by making objects appear bluer and less distinct in the distance?",
        options: ["Linear perspective", "Atmospheric perspective", "Foreshortening", "Two-point perspective"],
        answer: 1
    },
    {
        question: "Which printmaking technique uses a greasy crayon to create an image on a stone or plate?",
        options: ["Etching", "Lithography", "Woodcut", "Screenprinting"],
        answer: 1
    },
    {
        question: "Which artist is known for painting 'The Starry Night'?",
        options: ["Leonardo da Vinci", "Michelangelo", "Claude Monet", "Vincent van Gogh"],
        answer: 3
    }
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
        answerElement.textContent = `Question ${index + 1}: ${questionData.options[questionData.answer]}`;
        answersContainer.appendChild(answerElement);
    });
}

// Initialize the quiz
loadQuestion();
