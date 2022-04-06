var startBtnEl = document.getElementById('start-btn');
var questionContainerEl = document.getElementById('question-container');
var nextButtonEl = document.getElementById('next');
var currentQues;
var shuffleQues;
var questEl = document.getElementById('question');
var answerBtnClass = document.getElementsByClassName('answer-Btn');
start.addEventListener('click', startQuiz);
nextButtonEl.addEventListener('click', nextQues());


function startQuiz() {
    start.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    shuffleQues = questions.Math.random(Math.floor() + 5);
    currentQues = 0;
    nextQues();
}


function nextQues() {
    showQuestion (shuffleQues);
    question.answer.forEach(answer => {
        var btn = document.createElement('button')
        nextButtonEl.innerText = answer.text
        nextButtonEl.classList.add('btn')
        if (answer.correct) {
            nextButtonEl.dataset.correct = answer.correct
        }
        nextButtonEl.addEventListener('click', selectAnswer)
        answerBtnClass.appendChild(buton)
    })
        nextButtonEl.classList.remove('hide');
}

function showQuestion(questions) {
    questEl.innerText = questions.question
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

    },
    {
    question: 'How Many Super Bowls Have the Dallas Cowboys Won?',
        answer: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false},
            {text: '5', correct: true}
        ]

    },
    {
    question: 'Which is the Best Call of Duty?',
        answer: [
            {text: 'Modern Warfare 2', correct: false},
            {text: 'Black Ops 2', correct: true},
            {text: 'Black Ops', correct: false},
            {text: 'Advanced Warfare ', correct: false}
        ]

    },
    {
    question: 'I am Keyser Soze?',
        answer: [
            {text: 'True', correct: false},
            {text: 'False', correct: false},
            {text: 'True, but again', correct: true},
            {text: 'False, but maybe not', correct: false}
        ]

    },
    {
    question: 'Which is the Scariest?',
        answer: [
            {text: 'Clowns', correct: true},
            {text: 'Zombies', correct: false},
            {text: 'Vampires', correct: false},
            {text: 'Zombie ClownPires', correct: false}
        ]

    }
]

console.log(questions);