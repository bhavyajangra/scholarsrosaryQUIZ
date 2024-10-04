// quiz data will be stored in this array
let quizData = [];

// current question index
let currentQuestion = 0;

// function to generate options
function generateOptions(options) {
    const optionsHtml = options.map((option, index) => {
        return `
            <li>
                <input type="radio" id="option-${index}" name="option" value="${option}">
                <label for="option-${index}">${option}</label>
            </li>
        `;
    }).join('');
    document.getElementById('options').innerHTML = optionsHtml;
}

// function to display question and options
function displayQuestion() {
    const question = quizData[currentQuestion].question;
    const options = quizData[currentQuestion].options;
    document.getElementById('question').innerHTML = question;
    generateOptions(options);
}

// function to check answer
function checkAnswer() {
    const userAnswer = document.querySelector('input[name="option"]:checked').value;
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerHTML = 'Correct!';
    } else {
        document.getElementById('result').innerHTML = `Incorrect. The correct answer is ${correctAnswer}.`;
    }
}

// function to display next question
function displayNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        currentQuestion = 0;
    }
    displayQuestion();
}

// event listeners
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('next-btn').addEventListener('click', displayNextQuestion);

// initialize quiz
displayQuestion();
