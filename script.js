// quiz data will be stored in this array
let quizData = [];

// current question index
let currentQuestion = 0;

// function to generate options
function generateOptions(options) {
    const optionsHtml = options.map((option, index) => {
        return `
            <li>
                <input type="radio" id="option-${index}" name
