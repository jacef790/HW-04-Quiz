var startBtnEl = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var currentQues
var shuffleQues
start.addEventListener('click', startQuiz)


function startQuiz() {
    start.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    currentQuesIndex = 0
    nextQues();


}

function nextQues() {

}

function selectAnswer() {

}

var questions = [
    {
    question: 'What is the Best Sandwich?',
        answer: [
            {text: 'Ham and Cheese', correct: false},
            {text: 'BLT', correct: false},
            {text: 'PBJ', correct: true},
            {text: 'Chicken Salad', correct: false}
        ]

    }
]